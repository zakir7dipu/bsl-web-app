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
        Schema::create('session_hosts', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('workshop_session_id')->nullable();
            $table->foreign('workshop_session_id')->references('id')->on('workshop_sessions');

            $table->unsignedBigInteger('host_id')->nullable();
            $table->foreign('host_id')->references('id')->on('hosts');

            $table->text('message')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('session_hosts');
    }
};
