<?php

namespace Database\Factories\Admin;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Admin\MerchantStore;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin\MerchantStore>
 */
class MerchantStoreFactory extends Factory
{
    protected $model = MerchantStore::class;
    public function definition(): array
    {
        return [
           'store_name' => fake()->sentence(5),
            'is_open' => Arr::random([true, false]),
        ];
    }
}
