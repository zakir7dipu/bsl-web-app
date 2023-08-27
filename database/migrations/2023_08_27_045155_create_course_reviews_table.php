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
        Schema::create('course_reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("course_id",false);
            $table->foreign('course_id')->references('id')->on('courses')->restrictOnDelete()->cascadeOnUpdate();
            $table->string("name");
            $table->string("email");
            $table->string("phone");
            $table->longText("message");
            $table->timestamp("published_at")->nullable();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_reviews');
    }
};
