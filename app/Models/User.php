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
        'bio',
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
        'followings_count_formatted',
        'bluemark_boolean',
        'verified_status'
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


    public function searchableAs(): string
    {
        return 'users_index';
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
            get: function () {
                $this->loadCount('followers');
                return Number::abbreviate($this->followers_count);
            }
        );
    }
    protected function followingsCountFormatted(): Attribute
    {
        return Attribute::make(
            get: function () {
                $this->loadCount('followings');
                return Number::abbreviate($this->followings_count);
            }
        );
    }
    protected function bluemarkBoolean(): Attribute
    {
        return Attribute::make(
            get: function () {
                return isset($this->bluemark);
            }
        );
    }

    protected function verifiedStatus(): Attribute
    {
        return Attribute::make(
            get: function () {
                // 1. Check if the info exists
                if ($this->verifiedacountinfo) {
                    // 2. Return the actual text (e.g., 'pending')
                    return $this->verifiedacountinfo->status;
                }

                // 3. Return a default if no info exists
                return 'unverified';
            }
        );
    }


    public function bluemark()
    {
        return $this->hasOne(Bluemark::class, 'user_id');
    }
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function likes()
    {
        return $this->hasMany(Like::class);
    }


    public function likedPosts()
    {
        // usage: $this->belongsToMany(Model, table_name, my_id_in_table, other_id_in_table)
        /**
         * Model -> what you want
         * Table_name -> which is use for bridge
         * My_id_in_table -> which is refer current you | login user
         * Other_id_in_table -> the id you want to connect with Post::class
         *
         * so i idea is like (You get   Post where id == post_id WHERE like_id = Auth::id() )
         * User liked the many posts  ( 1 To M)
         * Posts liked by Many User  (1 To M)
         * Result: It is M to M relation between User and Posts
         * So Can't connect directly , need to bridge
         *
         * SELECT posts* FROM posts
           INNER JOIN likes
           ON posts.id = likes.post_id
           WHERE likes.user_id = Auth::user()
         */
        return $this->belongsToMany(Post::class, 'likes', 'like_id', 'post_id')
            ->withTimestamps(); // If you want to know WHEN they liked it
    }

    public function followingUserPost(){
        return $this->hasManyThrough(Post::class , Follow::class , 'follower_id' , 'user_id' , 'id' , 'user_id')
                    ->withCount(['likes' , 'comments' , 'views'])
                    ;
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

    // Account Infor
    public function verifiedacountinfo()
    {
        return $this->hasOne(VerifiedAccountInfo::class);
    }
}
