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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('service_id')->nullable();
            $table->foreign('service_id')->references('id')->on('services');

            $table->string("name",256);

            $table->string("thumbnail")->nullable();
            $table->string("banner")->nullable();

            $table->longText("description");
            $table->text("video_id")->nullable();
            $table->double("price");
            $table->double("discount")->nullable();
            $table->integer("class_count")->default(0);
            $table->text("duration")->nullable();
            $table->text("class_per_week")->nullable();
            $table->text("class_duration")->nullable();
            $table->text("language")->nullable();
            $table->enum("delivery_mode",["online","off_line"])->default('online');
            $table->enum("course_type",["admission","going_on"])->default('going_on');

            $table->date("start_date")->nullable();
            $table->date("end_date")->nullable();

            $table->longText("curriculum_text")->nullable();
            $table->string("slug")->unique();

            $table->timestamp("published_at")->nullable();
            $table->unsignedBigInteger('created_by');
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
        Schema::dropIfExists('courses');
    }
};
