<?php

namespace Database\Factories\Distributor;

use App\Models\Distributor\Distributor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use App\Models\Distributor\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductsFactory extends Factory
{
    protected $model = Product::class;
    public function definition(): array
    {
        return [
            'is_available' => Arr::random([true, false]),
            'product_name' => fake()->word(),
            'description' => fake()->sentence(10),
            'price' => fake()->numberBetween(1, 20000),
            'variant' => fake()->word(),
            'quantity' => fake()->numberBetween(1, 500),
            'photo_path' => fake()->image(storage_path('app/productImages'), 500)
        ];
    }
    public function associate(Distributor $distributor): Factory
    {
        return $this->state(function (array $attributes) use ($distributor) {
            $brand = $distributor->brands()->inRandomOrder()->first();
            $brandCategory = $brand->brandCategory()->first();
            $productType = $brandCategory->productTypes()->first();
            return [
                'brand_id' => $brand->brand_id,
                'type_id' => $productType->id,
            ];
        });
    }
}
