<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use App\Events\PostLikeEvent;
use App\Events\PostLikePrivateNotification;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function store(Request $request)
    {
        $postId = $request->input('post_id');
        $likeId = $request->input('like_id');
        $userId = $request->input('user_id');

        // Check if the like already exists
        $existingLike =  Like::where('post_id', $postId)
            ->where('like_id', $likeId)
            ->first();

        if ($existingLike) {
            // If it exists, remove the like (unlike)
            $existingLike->delete();
            PostLikeEvent::dispatch($postId);
            return response()->json(['status' => 'unliked']);
        } else {
            // If it doesn't exist, create a new like
             Like::create([
                'post_id' => $postId,
                'user_id' => $userId,
                'like_id' => $likeId,
            ]);

            PostLikeEvent::dispatch($postId);
            $currentUser = Auth::user();
            if($currentUser->id  !== $userId ) {
                PostLikePrivateNotification::dispatch($userId , $currentUser , $postId);
            }
            return response()->json(['status' => 'liked']);
        }
    }
}
