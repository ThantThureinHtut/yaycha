<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function account()
    {
        return Inertia::render('UserAccount/Account');
    }
    public function edit(Request $request): Response
    {
        return Inertia::render('UserAccount/ProfileEdit', [
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
