<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkshopOrganizer extends Model
{
    use HasFactory;

    protected $table = "workshop_organizer";

    protected $fillable = [
        'workshop_seminar_id',
        'title',
        'thumbnail'
    ];

    public function workshopSeminar()
    {
        return $this->belongsTo(WorkshopSeminars::class,'workshop_seminar_id','id');
    }

}
