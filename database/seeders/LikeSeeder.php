<?php

namespace Database\Seeders;

use App\Models\Like;
use App\Models\User;
use App\Models\View;
use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        for ($i = 0; $i < 20; $i++) {

            // Like::create(attributes: [
            //     'post_id' => 1,
            //     'user_id' => fake()->numberBetween(1, 11)
            // ]);
            // View::create(attributes: [
            //     'post_id' => 1,
            //     'user_id' => fake()->numberBetween(1, 11)
            // ]);

            // Comment::create(attributes: [
            //     'post_id' => 1,
            //     'user_id' => fake()->numberBetween(1, 11),
            //     'comment' => fake()->paragraph()
            // ]);
            User::create(attributes: [
                'name' => fake()->name(),
                'email' => fake()->email(),
                'username' => fake()->name(),
                'password' => 'password',
                'provider_method' => 'manual',
            ]);
        }
    }
}
