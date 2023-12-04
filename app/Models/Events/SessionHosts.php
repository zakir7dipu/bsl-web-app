<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionHosts extends Model
{
    use HasFactory;

    protected $table = "session_hosts";

    protected $fillable = [
        'workshop_session_id',
        'host_id',
        'message',
    ];

    public function workshopSession()
    {
        return $this->belongsTo(WorkshopSessions::class, 'workshop_session_id', 'id');
    }

    public function host()
    {
        return $this->belongsTo(Hosts::class, 'host_id', 'id');
    }
}
