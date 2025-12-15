<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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
        $avatar = $avatar_name[rand(0, 12)];
        // Check if admin already exists to avoid duplicates
        if (!User::where('email', env('ADMIN_EMAIL'))->exists()) {
            User::create([
                'name' => 'Super Admin',
                'username' => 'superadmin',
                'email' => env('ADMIN_EMAIL', 'admin@example.com'),
                'provider_method' => 'manual',
                'password' => Hash::make(env('ADMIN_PASSWORD', 'password')),
                'avatar_url' =>   'https://api.dicebear.com/9.x/fun-emoji/svg?seed=' . $avatar,
                'role' => 'superadmin' ,
                'email_verified_at' => now(),
            ]);
        }
    }
}
