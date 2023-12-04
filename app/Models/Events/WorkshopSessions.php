<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class WorkshopSessions extends Model
{
    use HasFactory;

    protected $table = "workshop_sessions";

    protected $fillable = [
        'workshop_day_id',
        'title',
        'from',
        'to',
        'topics',
        'image_link',
        'created_by',
        'updated_by',
    ];

    public function workshopDay()
    {
        return $this->belongsTo(WorkshopDays::class,'workshop_day_id','id');
    }

    public function sessionHosts()
    {
        return $this->hasMany(SessionHosts::class,'workshop_session_id','id');
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
