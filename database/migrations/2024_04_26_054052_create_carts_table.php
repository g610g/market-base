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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('customer_id')
                ->constrained('customers', 'customer_id');
            $table->string('product_id')->nullable(false);
            $table->string('status');
            $table->string('product_name')->nullable(false);
            $table->decimal('product_price', 8, 2)->nullable(false);
            $table->decimal('total_price', 8, 2)->nullable(false);
            $table->integer('quantity');
            $table->string('product_variant');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
