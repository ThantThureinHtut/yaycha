<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

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
            return response()->json(['status' => 'unliked']);
        } else {
            // If it doesn't exist, create a new like
            Like::create([
                'post_id' => $postId,
                'user_id' => $userId,
                'like_id' => $likeId,
            ]);

            return response()->json(['status' => 'liked']);
        }
    }
}
