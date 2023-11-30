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
        Schema::create('workshop_sessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('workshop_day_id')->nullable();
            $table->foreign('workshop_day_id')->references('id')->on('workshop_days');

            $table->string('title', 256)->nullable();
            $table->time('from')->nullable();
            $table->time('to')->nullable();

            $table->text('topics')->nullable();

            $table->string('image_link', 128)->nullable();

            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('updated_by')->references('id')->on('users');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workshop_sessions');
    }
};
