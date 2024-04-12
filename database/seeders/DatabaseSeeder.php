<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin\Admin;
use App\Models\Customer;
use App\Models\Distributor\Distributor;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $roles = ['admin', 'distributor', 'customer'];
        foreach($roles as $role){
            Role::firstOrCreate([
                'role' => $role
            ]);
        }
        // seeding user with a corresponding customer relationship
        User::factory()->has(Customer::factory()->count(1))->create([
            'role_id' => Role::CUSTOMER
        ]);
        User::factory()->has(Distributor::factory()->count(1))->create([
            'role_id' => Role::DISTRIBUTOR
        ]);
        User::factory()->has(Admin::factory()->count(1))->create([
            'role_id' => Role::ADMIN
        ]);
    }
}
