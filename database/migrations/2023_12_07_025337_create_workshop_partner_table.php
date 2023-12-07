<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workshop_partner', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('workshop_seminar_id')->nullable();
            $table->foreign('workshop_seminar_id')->references('id')->on('workshop_seminars');

            $table->string('title', 128);
            $table->string('thumbnail', 128)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workshop_partner');
    }
};
