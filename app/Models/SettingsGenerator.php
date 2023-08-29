<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SettingsGenerator extends Model
{
    public function findSetting($page)
    {
        return setting($page);
    }

    public function saveSetting($page, $request)
    {
        setting([$page => $request]);
        return setting($page);
    }
}
