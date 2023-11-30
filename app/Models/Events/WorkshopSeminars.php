<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class WorkshopSeminars extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "workshop_seminars";

    protected $fillable = [
        'name',
        'slug',
        'form_date',
        'to_date',
        'type',
        'price',
        'sponsors',
        'objective',
        'description',
        'image_link',
        'created_by',
        'updated_by',
    ];

    public function workshopDays()
    {
        return $this->hasMany(WorkshopDays::class);
    }

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
