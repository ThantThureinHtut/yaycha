<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;


use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
        'has_password'
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
    protected function hasPassword(): Attribute  {
        return Attribute::make(
            get: fn () => !is_null($this->password)
        );
    }
      public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function likes() {
        return $this->hasMany(Like::class);
    }
    public function views() {
        return $this->hasMany(View::class);
    }
     public function comments(){
        return $this->hasMany(Comment::class);
    }
}
