<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'id',
        'post_id',
        'parent_id',
        'user_id',
        'comment',
        'created_at',
        'updated_at'
    ];

    // 1. The "Children" (Replies)
    // "Go find other comments that have MY ID in their parent_id column"
    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id')
                    ->with('user:id,username,avatar_url')
                    ->with('replies.parent.user:id,username')
                    ->with('replies');
    }

    // 2. The "Parent" (The comment I replied to)
    // "Look at my parent_id column, and go find that comment"
    public function parent()
    {
        return $this->belongsTo(Comment::class, 'parent_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
