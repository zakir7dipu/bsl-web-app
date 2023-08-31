<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Technology extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "technology";
    protected $fillable = [
        'name',
        'slug',
        'order_by',
        'image_link',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($query) {
            $bytes = random_bytes(8);
            $query->slug = bin2hex($bytes);
        });
    }
}
