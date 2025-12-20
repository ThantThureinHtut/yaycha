<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Events\UserFollowerEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\JsonResponse;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function account()
    {
        $posts =  Post::with(['user:id,username,email,avatar_url,bio', 'likes.user:id,username,avatar_url,bio', 'views', 'comments.user:id,username,avatar_url,bio']) // Load user and likes data efficiently
            ->where('user_id', Auth::user()->id)
            ->withCount(['likes', 'views', 'comments']) // Automatically counts likes as 'likes_count'
            ->latest()
            ->get();

        $user = User::where('id', Auth::user()->id)->withCount(['followers', 'followings'])->first();
        $user->load([
            'followers',
            'followings'
        ]);
        return Inertia::render('User/UserAccount/Account', [
            'posts' => $posts,
            'auth' => [
                'user' => $user
            ],
        ]);
    }
    /**
     * Display the user's profile form.
     */
    public function show($id)
    {

        $posts = Post::with(['user:id,username,email,avatar_url,bio', 'likes', 'views', 'comments.user:id,username,avatar_url,bio']) // Load user and likes data efficiently
            ->where('user_id', $id)
            ->withCount(['likes', 'views', 'comments']) // Automatically counts likes as 'likes_count'
            ->latest()
            ->get();

        $followingUser = User::where('id', $id)->withCount(['followers', 'followings'])->first();
        $followingUser->load([
            'followers',
            'followings',
            'bluemark'
        ]);
        $user = User::where('id', Auth::user()->id)->withCount(['followers', 'followings'])->first();
        $user->load([
            'followers',
            'followings',
            'bluemark'
        ]);

        return Inertia::render('User/UserAccount/ProfileShow', [
            'posts' => $posts,
            'followingUser' => $followingUser,
            'auth' => [
                'user' => $user
            ],
        ]);
    }

    public function edit(Request $request): Response
    {
        return Inertia::render('User/UserAccount/ProfileEdit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        $request->user()->fill($request->validated());
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('account.edit');
    }


    /**
     * Your Liked Post
     */

    public function liked_show(): Response
    {
        $posts = Auth::user()->likedPosts()->with(['user:id,username,email,avatar_url', 'likes', 'views']) // Load the author of the post
            ->withCount(['likes', 'views', 'comments'])
            ->latest() // Sort by when I liked them!
            ->get();
        $user = User::where('id', Auth::user()->id)->withCount(['followers', 'followings'])->first();
        $user->load([
            'followers',
            'followings',
            'bluemark',
            'verifiedacountinfo'
        ]);
        return Inertia::render('User/UserAccount/LikedPost', [
            'posts' => $posts,
            'auth' => [
                'user' => $user
            ]
        ]);
    }


    /**
     * User Search
     */
    public function search(Request $request): JsonResponse
    {
        $query = $request->input('query');
        $users = User::query()
            ->where('name', 'LIKE', "%{$query}%")
            ->orWhere('email', 'LIKE', "%{$query}}")
            ->get();
        return response()->json([
            'users' => $users
        ]);
    }

    /**
     * Delete the user's account.
     */
    public function destory(Request $request): RedirectResponse
    {
        $user = $request->user();
        if (!is_null($user->password)) {
            $request->validate([
                'password' => ['required', 'current_password'],
            ]);
        } else {
            $request->validate([
                'password' => ['required', 'in:DELETE ACCOUNT'],
            ], [
                // Custom error message
                'password.in' => 'You must type "DELETE ACCOUNT" to confirm.',
            ]);
        }




        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
