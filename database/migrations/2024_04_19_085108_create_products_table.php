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
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id');
            $table->boolean('is_available')->nullable(false);
            $table->string('product_name')->nullable(false);
            $table->string('description');
            $table->string('variant');
            $table->string('photo_path')->nullable(true);
            $table->foreignUuid('brand_id')
                ->constrained('brands', 'brand_id')
                ->cascadeOnDelete();
            $table->unsignedInteger('quantity');
            $table->foreignId('type_id')
                ->constrained('product_types');
            $table->decimal('price', 8, 2);
            $table->foreignId('inventory_id')
                ->constrained('inventories')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
