<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WorkshopDays extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "workshop_days";

    protected $fillable = [
        'workshop_seminar_id',
        'title',
    ];

    public function workshopSeminar()
    {
        return $this->belongsTo(WorkshopSeminars::class);
    }

    public function workshopSessions()
    {
        return $this->hasMany(WorkshopSessions::class);
    }

}
