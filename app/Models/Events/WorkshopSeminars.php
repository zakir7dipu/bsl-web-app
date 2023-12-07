<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class WorkshopSeminars extends Model
{
    use HasFactory;

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
        'location',
        'subtext',
        'promo_video',
        'created_by',
        'updated_by',
    ];

    public function workshopDays()
    {
        return $this->hasMany(WorkshopDays::class, 'workshop_seminar_id', 'id');
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

            $bytes = random_bytes(8);
            $query->slug = bin2hex($bytes);
        });
        static::updating(function ($query) {
            if (Auth::check()) {
                $query->updated_by = Auth::user()->id;
            }
        });
    }
}
