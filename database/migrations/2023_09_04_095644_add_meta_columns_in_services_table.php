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
        Schema::table('services', function (Blueprint $table) {
            $table->string('slug',128)->after('title')->nullable();
            $table->string('meta_title',264)->after('type')->nullable();
            $table->text('meta_keywords')->after('meta_title')->nullable();
            $table->text('meta_description')->after('meta_keywords')->nullable();
            $table->text('meta_image_link')->after('meta_description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['slug','meta_title','meta_keywords','meta_description','meta_image_link']);
        });
    }
};
