<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('workshop_seminars', function (Blueprint $table) {
            $table->text('location')->after('description')->nullable();
            $table->text('subtext')->after('location')->nullable();
            $table->string('promo_video', 128)->after('subtext')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('workshop_seminars', function (Blueprint $table) {
            $table->dropColumn(['location', 'subtext', 'promo_video']);
        });
    }
};
