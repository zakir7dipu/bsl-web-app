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
        Schema::create('workshop_seminars', function (Blueprint $table) {
            $table->id();
            $table->string('name', 256)->nullable();
            $table->date('form_date')->nullable();
            $table->date('to_date')->nullable();
            $table->enum('type', ['workshop', 'seminar'])->default('workshop');
            $table->double('price')->default(0);
            $table->text('sponsors')->nullable();
            $table->text('objective')->nullable();
            $table->text('description')->nullable();

            $table->string('image_link',128)->nullable();
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
        Schema::dropIfExists('workshop_seminars');
    }
};
