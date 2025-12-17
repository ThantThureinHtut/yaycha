<?php

namespace App\Http\Controllers;

use App\Events\FollowPrivateNotification;
use App\Events\UserFollowerEvent;
use App\Models\User;
use App\Models\Follow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FollowController extends Controller
{
    public function index(Request $request)
    {
        $folloingUser = User::with('followers', 'followings')->where('id' , $request->id)->first();
        return response()->json(['folloingUser' => $folloingUser]);
    }
    public function store($id)
    {

        $existing = Follow::where([
            'user_id' => $id,
            'follower_id' => Auth::user()->id
        ])->first();

        $followerUser = Auth::user();

        if ($existing) {
            $existing->delete();
            return response()->json([
                'status' => 'unfollowed'
            ]);
        } else {
            Follow::create([
                'user_id' => $id,
                'follower_id' => Auth::user()->id
            ]);

            // Dispatch Event for Private Notification
            FollowPrivateNotification::dispatch($followerUser, $id);


             return response()->json([
                'status' => 'followed'
            ]);
        }


    }
}
