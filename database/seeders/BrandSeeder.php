<?php

namespace Database\Seeders;

use App\Models\Distributor\Distributor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    public function run(): void
    {
        $distributor = Distributor::first();
        //add distributor brand and also associate it to stores that the distributor is in
        //no connection of distributor and brand it is in
        $distributor->brands()->create([
            'brand_name' => fake()->sentence(3),
            ]);

    }
}
