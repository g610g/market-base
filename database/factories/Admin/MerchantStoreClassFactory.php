<?php

namespace Database\Factories\Admin;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin\MerchantStoreClass>
 */
class MerchantStoreClassFactory extends Factory
{
    public function definition(): array
    {
        return [
           'class_name' => fake()->word()
        ];
    }
}
