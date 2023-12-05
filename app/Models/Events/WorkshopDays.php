<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkshopDays extends Model
{
    use HasFactory;

    protected $table = "workshop_days";

    protected $fillable = [
        'workshop_seminar_id',
        'title',
        'date'
    ];

    public function workshopSeminar()
    {
        return $this->belongsTo(WorkshopSeminars::class,'workshop_seminar_id','id');
    }

    public function workshopSessions()
    {
        return $this->hasMany(WorkshopSessions::class,'workshop_day_id','id');
    }

}
