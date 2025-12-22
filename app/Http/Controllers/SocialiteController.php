<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }
    public function callback($provider)
    {
        try {
            $authUser = Socialite::driver($provider)->stateless()->user();
        } catch (\Exception $e) {
            return redirect('/login');
        }

        // Check the The Email user is exist or not
        $existingUser = User::where('email', $authUser->email)->first();



        $username = strtolower($authUser->name) . rand(1, 500);
        $avatar_name = [
            'Jessica',
            'Kimberly',
            'Eden',
            'Riley',
            'Liliana',
            'Alexander',
            'Chase',
            'Luis',
            'Sophia',
            'Andrea',
            'Sawyer',
            'Wyatt',
            'Kimberly'
        ];
        $avatar = $avatar_name[rand(0, 12)]; // Your random logic
        if ($existingUser) {
            $existingUser->update([
                'provider_method' => $provider,
                'provider_token' => $authUser->token,
                'provider_refresh_token' => $authUser->refreshToken,
            ]);
            $user = $existingUser;
        } else {
            $user = User::create([
                'name' => $authUser->name,
                'email' => $authUser->email,
                'username' => str_replace(' ', '', $username),
                'provider_id' => $authUser->id, // Important: Save the Google ID
                'provider_method' => $provider,
                'provider_token' => $authUser->token,
                'provider_refresh_token' => $authUser->refreshToken,
                'avatar_url' => 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=' . $avatar,
                'password' => null, // No password for Google users
                'email_verified_at' => now(), // Auto-verify Google emails
            ]);
        }

        Auth::login($user);

        return redirect('/home');
    }
}
