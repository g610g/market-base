<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin\Admin;
use App\Models\Admin\BrandCategory;
use App\Models\Admin\MerchantStore;
use App\Models\Admin\MerchantStoreClass;
use App\Models\Customer;
use App\Models\Distributor\Brand;
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
        //
        $roles = ['admin', 'distributor', 'customer'];
        foreach($roles as $role) {
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
        User::factory()->has(Distributor::factory()->count(1))->create([
            'role_id' => Role::DISTRIBUTOR
        ]);
        $admin = User::factory()->has(Admin::factory()->count(1))->create([
             'role_id' => Role::ADMIN
         ])->admin;
        //creating merchant_stores and associating merchant class
        // $admin = Admin::first();
        // $merchantStores = MerchantStore::factory()->for(MerchantClass::factory()->create())->count(100)->create([
        //     'admin_id' => $admin->user->id
        // ]);
        $merchantStoreClass = MerchantStoreClass::factory()->count(3)->create();
        foreach ($merchantStoreClass as  $value) {
            MerchantStore::factory()->for($value)->count(30)->create([
                    'admin_id' => $admin->admin_id
                ]);
            BrandCategory::factory()->for($value)->count(3)->create();
        }

        $distributors = Distributor::all();
        foreach ($distributors as $distributor) {
            $category = BrandCategory::inRandomOrder()->first();
            $merchantStore = $category->merchantStoreClass()
                                ->first()
                                ->merchantStore()
                                ->first();
            Brand::factory()->for($distributor)
                        ->count(2)
                        ->create([
                            'store_id' => $merchantStore->store_id,
                            'category_id' => $category->brand_cat_id
                    ]);
        }
    }
}
