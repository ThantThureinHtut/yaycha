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


        //   if the email is already exist , show the error  to user
        //  cuz if i don't check and login , i will occure the error , your github and google have the same email when you login with google and login with github get the erros
        // need to check $existingUser->provider_id != $authUser->id , we only want to give error when user login with other method
        // Noted: provider_id never change ,If user login with github or google , their provider_id is  the fixed

        //  if don't check with that , fist if you login it work ,
        // but when you login with same account again it show 'This email is already registered' which we don't want
        if ($existingUser && $existingUser->provider_id != $authUser->id) {
            // STOP here and send them back with an error message
            return redirect('/login')->withErrors([
                'email' => 'This email is already registered.'
            ]);
        }
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
        // if ($existingUser->provider_id == $authUser->id) {
        //     $user = User::where('provider_id', $authUser->id)->first();
        //     $user->update([
        //         'name' => $authUser->name,
        //         'email' => $authUser->email,
        //         'provider_method' => $provider,
        //         'username' => str_replace(' ', '', $username), // Make sure $username is defined above this block!
        //         'provider_token' => $authUser->token,
        //         'provider_refresh_token' => $authUser->refreshToken,
        //     ]);
        // } else {
        //     $user = User::create([
        //         'name' => $authUser->name,
        //         'email' => $authUser->email,
        //         'avatar_url' =>  'https://api.dicebear.com/9.x/fun-emoji/svg?seed=' .  $avatar,
        //         'provider_method' => $provider,
        //         'username' => str_replace(' ', '', $username),
        //         'provider_token' => $authUser->token,
        //         'provider_refresh_token' => $authUser->refreshToken,
        //     ]);
        // }
        $user = User::firstOrNew(['provider_id' => $authUser->id]);
        if (!$user->exists) {
            $avatar = $avatar_name[rand(0, 13)]; // Your random logic

            $user->avatar_url = 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=' . $avatar;
            $user->username = str_replace(' ', '', $username); // Create username once
            $user->provider_method = $provider;
        }

        $user->name = $authUser->name;
        $user->email = $authUser->email;
        $user->provider_token = $authUser->token;
        $user->provider_refresh_token = $authUser->refreshToken;

        // 4. Save to Database
        $user->save();

        Auth::login($user);

        return redirect('/home');
    }
}
