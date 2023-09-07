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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();

            $table->string('title',256)->nullable();
            $table->string('slug',256)->unique()->nullable();
            $table->text('description')->nullable();

            $table->string('image_link',128)->nullable();

            $table->integer('short_order')->nullable();
            $table->string('meta_title',256)->nullable();
            $table->text('meta_description')->nullable();
            $table->text('meta_keywords',)->nullable();
            $table->string('meta_image_link',128)->nullable();

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
        Schema::dropIfExists('blogs');
    }
};
