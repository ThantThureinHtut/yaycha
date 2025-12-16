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
                    ->whereIn('verified_status', ["pending", "success"])
                    ->where('name', 'LIKE', "%{$query}%")
                    ->orWhere('email', 'LIKE', "%{$query}%c")
                   ;
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
        return Inertia::render("Admin/AdminVerifications", [
            'users' => $userData,
            'filters' => ['search' => $query, 'filter' => $filter]
        ]);
    }
}
