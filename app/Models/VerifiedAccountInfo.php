<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerifiedAccountInfo extends Model
{
    protected $fillable = [
        'id',
        'username',
        'user_id',
        'legal_name',
        'status',
        'date_of_birth',
        'government_image',
        'selfie_image',
        'created_at',
        'updated_at'
    ];
    // protected $touches = ['user'];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
