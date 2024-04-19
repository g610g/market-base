<?php

namespace Database\Factories\Distributor;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Distributor\Inventory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Distributor\Inventory>
 */
class InventoryFactory extends Factory
{
    protected $model = Inventory::class;
    public function definition(): array
    {
        return [
           'products_quantity' => 0
        ];
    }
}
