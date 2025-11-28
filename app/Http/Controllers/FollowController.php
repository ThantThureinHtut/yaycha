<?php

namespace App\Http\Controllers;

use App\Events\UserFollowerEvent;
use App\Models\User;
use App\Models\Follow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FollowController extends Controller
{
    public function index()
    {
        $follow = User::with('followers', 'followings')->withCount(['followers', 'followings'])->where('id', Auth::user()->id)->first();
        return response()->json(['follow' => $follow]);
    }
    public function store($id)
    {
        // Check if the follow relationship already exists
        $follow = Follow::where([
            'user_id' => $id,
            'follower_id' => Auth::user()->id
        ])->first();
            // If follow exists, unfollow
        if ($follow) {
            $follow->delete();
            return [];
        } else {
            // Create new follow
            $follow = Follow::create([
                'user_id' => $id,
                'follower_id' => Auth::user()->id
            ]);
        }

        // Broadcast the follow/unfollow event
        broadcast(new UserFollowerEvent($follow))->toOthers();
        return response()->json([
            'status' => 'oky'
        ]);
    }
}
