<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Distributor\Brand;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BrandFactory extends Factory
{
    protected $model = Brand::class;
    public function definition(): array
    {
        //when creating the factory make sure to add the store_id attribute in create() since we have to indentify
        //store of the merchant that owns this brand
        return [
            'brand_name' => fake()->sentence(2),

        ];
    }
}
