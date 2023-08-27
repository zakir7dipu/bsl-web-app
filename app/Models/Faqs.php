<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Faqs extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "faqs";

    protected $fillable = [
        'name',
        'question',
        'answers',
    ];
}
