<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->uuid('customer_id');
            $table->primary('customer_id');
            $table->foreign('customer_id')
                ->references('id')
                ->on('users')
                ->cascadeOnDelete();
            $table->string('profile_picture')->nullable(false);
            $table->string('customer_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer');
    }
};
