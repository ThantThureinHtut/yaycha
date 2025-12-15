<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Database\Eloquent\Builder;

class AdminAllUserController extends Controller
{
    public function user_check()
    {
        $query = request()->query('search');
        // $search = $request->input('search');
        $filter = request()->query('filter');
        $userSearchData = User::search($query);
        switch ($filter) {
            case "sortAToZ":
                $userSearchData->orderBy('username', 'asc');
                break;
            case "oldUser":
                $userSearchData->orderBy('created_at', 'asc');
                break;
            case "pending":
                $userSearchData->where('verified_status', 'pending');
                break;
            case "success":
                $userSearchData->where('verified_status', 'success');
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
        logger();
        return Inertia::render("Admin/AdminAllUser", [
            'userData' => $userData,
            'filters' => [ 'search' => $query , 'filter' => $filter]
        ]);
    }

}
