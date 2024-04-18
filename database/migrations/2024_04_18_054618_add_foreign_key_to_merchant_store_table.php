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
        Schema::table('merchant_stores', function (Blueprint $table) {
            $table->foreignId('fk_class_id')
                    ->constrained(
                        'merchant_store_classification',
                        'class_id'
                    )
                    ->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('merchant_store', function (Blueprint $table) {
            //
        });
    }
};
