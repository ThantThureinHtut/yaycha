<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;


use Illuminate\Support\Number;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Symfony\Component\HttpFoundation\Session\Attribute\AttributeBag;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'avatar_url',
        'provider_method',
        'provider_id',
        'provider_token',
        'provider_refresh_token'
    ];

    // This make the virtual row and Column , this data is also include when data send to the frontend
    // This is need when need to use the own arrtibute
    protected $appends = [
        'has_password',
        'followers_count_formatted',
        'followings_count_formatted'
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Make the Own Attribute
    protected function hasPassword(): Attribute
    {
        return Attribute::make(
            get: fn() => !is_null($this->password)
        );
    }
    protected function followersCountFormatted(): Attribute
    {
        return Attribute::make(
            get: function() {
                $this->loadCount('followers');
                return Number::abbreviate($this->followers_count);
            }
        );
    }
    protected function followingsCountFormatted(): Attribute
    {
        return Attribute::make(
            get: function() {
                $this->loadCount('followings');
                return Number::abbreviate($this->followings_count);
            }
        );
    }


    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function likes()
    {
        return $this->hasMany(Like::class);
    }
    public function views()
    {
        return $this->hasMany(View::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    // 1. Get the people following ME
    public function followers()
    {
        // "I am the user_id, give me the people in the follower_id column"
        return $this->belongsToMany(User::class, 'follows', 'user_id', 'follower_id');
    }

    // 2. Get the people I AM following
    public function followings() // or 'following'
    {
        // "I am the follower_id, give me the people in the user_id column"
        return $this->belongsToMany(User::class, 'follows', 'follower_id', 'user_id');
    }
}
