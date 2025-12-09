<?php

namespace App\Models;

use Illuminate\Support\Number;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    protected $fillable = [
        'id',
        'title',
        'description',
        'user_id'
    ];


    // It is for Attribute
    // It make the virtual column  , it doesn't come from database
    // It look like manipulation the data
    // in Attribute , get method use for read only, it doesn't change the database
    // set -> write the data which is user input form -> Jack -> set method change into jack and save into databse like that
    // That kind of process make within the model
    protected $appends = [
        'likes_count_formatted',
        'views_count_formatted',
        'comments_count_formatted'
    ];

    protected function likesCountFormatted(): Attribute
    {
        return Attribute::make(
            get: fn() => Number::abbreviate($this->likes_count)
        );
    }
    protected function viewsCountFormatted(): Attribute {
        return Attribute::make(
            get: fn() => Number::abbreviate($this->views_count)
        );
    }
    protected function commentsCountFormatted(): Attribute {
        return Attribute::make(
            get: fn() => Number::abbreviate($this->comments_count)
        );
    }

    // Laravel model relational
    public function user()
    {
        return $this->belongsTo(User::class);
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

}
