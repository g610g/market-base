<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('dist_id')
                ->constrained('distributors', 'distributor_id')
                ->cascadeOnDelete();
            $table->unsignedBigInteger('products_quantity');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventories');
    }
};
