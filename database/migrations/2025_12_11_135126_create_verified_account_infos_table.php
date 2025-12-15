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
        Schema::create('verified_account_infos', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('legal_name');
            $table->string('date_of_birth');
            $table->longText('government_image');
            $table->longText('selfie_image');
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verified_account_infos');
    }
};
