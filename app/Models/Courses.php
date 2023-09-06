<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Courses extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "courses";

    protected $fillable = [
        'service_id',
        'name',
        'thumbnail',
        'banner',
        'description',
        'video_id',
        'price',
        'discount',
        'class_count',
        'duration',
        'class_per_week',
        'class_duration',
        'language',
        'delivery_mode',
        'course_type',
        'start_date',
        'end_date',
        'curriculum_text',
        'slug',
        'published_at',
    ];

    public function service()
    {
        return $this->belongsTo(Services::class, "service_id", "id");
    }

    public function curriculums()
    {
        return $this->hasMany(Curricular::class, "course_id", "id");
    }

    public function reviews()
    {
        return $this->hasMany(Reviews::class, "course_id", "id");
    }

    // TODO :: boot
    // boot() function used to insert logged user_id at 'created_by' & 'updated_by'
    public static function boot(){
        parent::boot();
        static::creating(function($query){
            if (Auth::check()) {
                $query->created_by = Auth::user()->id;
            }
            $query->published_at = date('y-m-d');
        });
        static::updating(function($query){
            if(Auth::check()){
                $query->updated_by = Auth::user()->id;
            }
        });
    }
}
