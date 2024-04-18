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
        Schema::create('brands', function (Blueprint $table) {
            $table->uuid('brand_id');
            $table->foreignUuid('dist_id')->constrained('distributors', 'distributor_id')
                    ->cascadeOnDelete();
            $table->foreignUuid('store_id')->constrained('merchant_stores', 'store_id')
                        ->cascadeOnDelete();
            $table->string('brand_name')->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brands');
    }
};
