<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('merchant_stores', function (Blueprint $table) {
            $table->uuid('store_id')->primary();
            $table->string('store_name')->unique();
            $table->foreignUuid('admin_id')->constrained('admins', 'admin_id');
            //add a foreign id for merchant_store_classification
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('merchant_stores');
    }
};
