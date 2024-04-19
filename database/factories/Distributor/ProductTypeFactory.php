<?php

namespace Database\Factories\Distributor;

use App\Models\Distributor\Distributor;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Distributor\ProductType;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Distributor\ProductType>
 */
class ProductTypeFactory extends Factory
{
    protected $model = ProductType::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'product_type' => fake()->word(2)
        ];
    }
    public function associate(Distributor $distributor): Factory
    {
        return $this->state(function (array $attributes) use ($distributor) {
            $distBrand = $distributor->brands()->first();
            $distBrandCat = $distBrand->brandCategory()->first();
            return [
                'brand_category_id' => $distBrandCat->brand_cat_id
            ];

        });
    }
}
