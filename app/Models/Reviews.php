<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reviews extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "course_reviews";
    protected $fillable = [
        'course_id',
        'name',
        'email',
        'phone',
        'message',
        'published_at'
    ];

    public function course()
    {
        return $this->belongsTo(Courses::class, "course_id", "id");
    }
}
