<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class OurManagement extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "our_managements";

    protected $fillable = [
        'index_of',
        'type',
        'name',
        'designation',
        'company',
        'headshot',
        'biography',
        'about',
        'linkedin',
        'facebook',
        'website',
        'youtube',
        'twitter',
        'slug',
        'avatar',
    ];

    // TODO :: boot
    // boot() function used to insert logged user_id at 'created_by' & 'updated_by'
    public static function boot(){
        parent::boot();
        static::creating(function($query){
            if(Auth::check()){
                $query->created_by = Auth::user()->id;
            }
            $bytes = random_bytes(8);
            $query->slug = bin2hex($bytes);
        });
        static::updating(function($query){
            if(Auth::check()){
                $query->updated_by = Auth::user()->id;
            }
        });
    }
}
