<?php

namespace Database\Factories\Admin;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Admin\MerchantClass;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin\MerchantClass>
 */
class MerchantClassFactory extends Factory
{
    protected $model = MerchantClass::class;
    public function definition(): array
    {
        return [
           'class_name' => fake()->word()
        ];
    }
}
