<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Pages extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "pages";

    protected $fillable = [
        'name',
        'slug',
        'description',
        'image_link',
    ];

    // TODO :: boot
    // boot() function used to insert logged user_id at 'created_by' & 'updated_by'
    public static function boot()
    {
        parent::boot();
        static::creating(function ($query) {
            if (Auth::check()) {
                $query->created_by = Auth::user()->id;
            }
        });
        static::updating(function ($query) {
            if (Auth::check()) {
                $query->updated_by = Auth::user()->id;
            }
        });
    }
}
