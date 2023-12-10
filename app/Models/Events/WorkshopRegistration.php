<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Model;

class WorkshopRegistration extends Model
{
    protected $table = "workshop_registrations";

    protected $fillable = [
        'workshop_seminar_id',
        'name',
        'email',
        'phone',
        'designation',
        'linkedin',
    ];

    public function workshopSeminar()
    {
        return $this->belongsTo(WorkshopSeminars::class, 'workshop_seminar_id', 'id');
    }
}
