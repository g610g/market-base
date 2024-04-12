<?php

namespace Database\Factories\Distributor;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Distributor\Distributor>
 */
class DistributorFactory extends Factory
{
    public function definition(): array
    {
        return [
           'description' => fake()->text(100)
        ];
    }
}
