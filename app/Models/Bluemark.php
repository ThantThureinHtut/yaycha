<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bluemark extends Model
{
    protected $fillable = [
        'id',
        'bluemark',
        'user_id',
        'crated_at',
        'updated_at'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
