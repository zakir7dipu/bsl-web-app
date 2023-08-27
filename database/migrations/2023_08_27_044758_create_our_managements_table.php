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
        Schema::create('our_managements', function (Blueprint $table) {
            $table->id();

            $table->integer('index_of');
            $table->enum('type',['management','hod']);
            $table->string('name');
            $table->string('designation');
            $table->string('company');
            $table->string('headshot')->nullable();
            $table->string('biography')->nullable();
            $table->longText('about');

            $table->string('linkedin',64)->nullable();
            $table->string('facebook',64)->nullable();
            $table->string('website',64)->nullable();
            $table->string('youtube',64)->nullable();
            $table->string('twitter',64)->nullable();

            $table->string('slug')->unique();
            $table->string('avatar',128)->nullable();

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
        Schema::dropIfExists('our_managements');
    }
};
