<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SessionHosts extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "session_hosts";

    protected $fillable = [
        'workshop_session_id',
        'host_id',
        'message',
    ];

    public function workshopSession()
    {
        return $this->belongsTo(WorkshopSessions::class);
    }

    public function host()
    {
        return $this->belongsTo(Hosts::class);
    }
}
