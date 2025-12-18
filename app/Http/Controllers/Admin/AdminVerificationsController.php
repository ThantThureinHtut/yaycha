<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\VerifiedAccountInfo;
use Laravel\Scout\Builder;

class AdminVerificationsController extends Controller
{
    public function verifications()
    {
        $query = request()->query('search');
        $filter = request()->query('filter');
        $userSearchData = User::query()
            ->whereHas('verifiedacountinfo', function ($q) {
                $q->whereIn('status', ["pending", "success"]);
            })
            ->where(function ($q) use ($query) {
                $q->where('name', 'LIKE', "%{$query}%")
                    ->orWhere('email', 'LIKE', "%{$query}%");
            });;
        switch ($filter) {
            case "sortAToZ":
                $userSearchData->orderBy('username', 'asc');
                break;
            case "oldUser":
                $userSearchData->orderBy('created_at', 'asc');
                break;
            case "loginByGoogle":
                $userSearchData->where('provider_method', 'google');
                break;
            case  "loginByManual":
                $userSearchData->where('provider_method', 'manual');
                break;
            default:
                $userSearchData;
        }

        $userData = $userSearchData->paginate(10);
        // 2. USE 'through' to transform the data and add image URLs
        $userData->map(function ($user) {
            // Check if verifiedacountinfo exists to avoid errors
            if ($user->verifiedacountinfo) {
                // Add Government Image URL
                $user->verifiedacountinfo->government_image = $user->verifiedacountinfo->government_image
                    ? asset('storage/' . $user->verifiedacountinfo->government_image)
                    : 'https://placehold.co/600x400';

                // Add Selfie Image URL
                $user->verifiedacountinfo->selfie_image = $user->verifiedacountinfo->selfie_image
                    ? asset('storage/' . $user->verifiedacountinfo->selfie_image)
                    : 'https://placehold.co/600x400';
            }
            return $user;
        });
        return Inertia::render("Admin/AdminVerifications", [
            'users' => $userData,
            'filters' => ['search' => $query, 'filter' => $filter]
        ]);
    }
}
