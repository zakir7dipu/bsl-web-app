<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Services extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "services";

    protected $fillable = [
        'parent_id',
        'title',
        'brief',
        'description',
        'image_link',
        'type',
    ];


    public function courses()
    {
        return $this->hasMany(Courses::class, "service_id", "id");
    }

    public function products()
    {
        return $this->hasMany(Products::class, "service_id", "id");
    }

    public static function boot(){
        parent::boot();
        static::creating(function($query){
            if(Auth::check()){
                $query->created_by = Auth::user()->id;
            }
        });
        static::updating(function($query){
            if(Auth::check()){
                $query->updated_by = Auth::user()->id;
            }
        });
    }
}
