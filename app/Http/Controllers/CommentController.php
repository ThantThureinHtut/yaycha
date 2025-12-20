<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function index($id)
    {
        $post = Post::with(['user:id,username,email,avatar_url', 'likes', 'views', 'comments.user:id,username,avatar_url']) // Load user and likes data efficiently
            ->where('id' , $id)
            ->withCount(['likes', 'views', 'comments']) // Automatically counts likes as 'likes_count'
            ->first();


        $comments = $post->comments()
        ->whereNull('parent_id') // <--- CRITICAL: Only get top-level comments
        ->with([
            'user:id,username,avatar_url',
             // The author of the comment
            // 'replies.user:id,username,avatar_url', // The authors of the replies
            // 'replies.replies' // Optional: Load replies of replies (Level 3)
        ])
        ->with('replies')
        ->get();

    return Inertia::render('User/Blog/CommentPage' , ['post' => $post  , 'comments' => $comments]);
    }

    public function store(Request $request){

        logger($request);

        Comment::create([
            'post_id' => $request->post_id,
            'parent_id' => $request->parent_id ,
            'user_id' => Auth::id(),
            'comment' => $request->comment
        ]);
        return redirect()->back();
    }
}
