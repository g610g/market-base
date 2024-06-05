<?php

namespace Database\Factories\Distributor;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Distributor\Distributor>
 */
class DistributorFactory extends Factory
{
    public function definition(): array
    {

        return [
           'description' => fake()->text(100),
            'profile_picture' => Storage::putFile('', new File(storage_path('app/productImages/default_pfp.png')))
        ];
    }
}
