<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
     protected $fillable = [
        'id',
        'post_id',
        'user_id'
    ];

    public function user(){
        // second argument is for your customzie name
        // which is mean in laravel rule , the user id name must be user_id ,for post  ,post_id
        // so if you change to connect with other foreign key , put your customize name for foreign key
        // user.id <-> user_id correct
        // user.id <-> user_Id incorrect
        // if you want to connect , use the second argument
        //  return $this->belongsTo(User::class  , 'user_Id);

        return $this->belongsTo(User::class );
    }
}
