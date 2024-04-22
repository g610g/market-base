<?php

namespace Database\Seeders;

use App\Models\Admin\Admin;
use App\Models\Admin\MerchantStoreClass;
use App\Models\Distributor\Distributor;
use App\Models\Distributor\ProductType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $data = [
            [
                'merchantStoreClass' => 'Pharmacy',
                'merchantStore' => 'MediHealth',

            ],
            [
                'merchantStoreClass' => 'Apparel',
                'merchantStore' => 'Fashionista Haven'
            ],
            [
                'merchantStoreClass' => 'Hardware',
                'merchantStore' => 'DIY Depot'
            ],
            [
                'merchantStoreClass' => 'Technology',
                'merchantStore' => 'TechGalaxy'
            ]

        ];
        $brandCategories = [
            [
                'brandCategory' => 'Over-the-counter medication',
                'productCategories' => [
                    'Pain Relief',
                    'Antihistamine',
                    'Digestive Relief',
                    'Allergy Medication',
                    'Cold & Flu Relief',
                    'Antacid Tablets',
                ],
                'storeClass' => 'Pharmacy',
            ],
            [
                'brandCategory' => 'Sportswear',
                'productCategories' => [
                    'Athletic Shoes',
                    'Workout Apparel',
                    'Hooded Sweatshirt',
                    'CrossFit Shoes',
                    'Outdoor Shorts',
                ],
                'storeClass' => 'Apparel',
            ],
            [
                'brandCategory' => 'Tools',
                'productCategories' => [
                    'Power Drill',
                    'Circular Saw ',
                    'Impact Driver',
                    'Laser Measure',
                    'Reciprocating Saw',
                ],
                'storeClass' => 'Hardware',
            ],
            [
                'brandCategory' => 'Utilities',
                'productCategories' => [
                    'Batteries',
                    'ToiletPaper',
                    'Alcohol',
                    'TrashBags',
                    'Air Freshener',
                ],
                'storeClass' => 'Grocery',
            ],
            [
                'brandCategory' => 'Meat',
                'productCategories' => [
                    'Beef',
                    'Chicken',
                    'Pork',
                    'Plant-Based',
                    'Fish',
                ],
                'storeClass' => 'Grocery',
            ],
            [
                'brandCategory' => 'PetFood',
                'productCategories' => [
                    'Dry Dog Food',
                    'Wet Dog Food',
                    'Dry Cat Food',
                    'Wet Cat Food',
                    'Breed Specific Food',
                ],
                'storeClass' => 'Grocery',
            ],
            [
                'brandCategory' => 'Produce',
                'productCategories' => [
                    'Apples',
                    'Tomatoes',
                ],
                'storeClass' => 'Grocery',
            ],
            [
                'brandCategory' => 'Beverages',
                'productCategories' => [
                    'Soda',
                    'Energy Drink',
                    'Caffiene',
                    'Bottled Tea',
                    'Water'
                ],
                'storeClass' => 'Grocery',
            ],
            [
                'brandCategory' => 'Cosmetics',
                'productCategories' => [
                     'Eyeliner',
                    'Lipstick',
                    'Facial Cream',
                    'Mascara',
                    'Face Powder'
                ],
                'storeClass' => 'Pharmacy',
            ],
            [
                'brandCategory' => 'Hygiene',
                'productCategories' => [
                     'Toothpaste',
                    'BarSoap',
                    'Shampoo',
                    'Razor',
                    'Tampons'
                ],
                'storeClass' => 'Pharmacy',
            ],
            [
                'brandCategory' => 'Electronics',
                'productCategories' => [
                     'SmartPhones',
                    'SmartWatches',
                    'Earpods',
                    'Laptops',
                    'Camera'
                ],
                'storeClass' => 'Technology',
            ],
            [
                'brandCategory' => 'Appliances',
                'productCategories' => [
                    'TV',
                    'Toaster',
                    'Steamer',
                    'Airfryer',
                    'Speaker',
                ],
                'storeClass' => 'Technology',
            ],
        ];
        $admin = Admin::first();
        foreach ($data as $item) {
            $storeClass = MerchantStoreClass::create([
                   'class_name' => $item['merchantStoreClass']
                ]);
            $admin->merchantStores()->create([
                    'store_name' => $item['merchantStore'],
                    'is_open' => true,
                    'fk_class_id' => $storeClass->class_id
                ]);
        }
        foreach($brandCategories as $item) {
            $merchantStore = MerchantStoreClass::firstOrCreate(['class_name' => $item['storeClass']]);
            $brandCategory = $merchantStore->brandCategories()->firstOrCreate([
                'category_name' => $item['brandCategory']
            ]);
            // $productCategoryCollection = collect($item['productCategories'])->map(function ($prodCat) {
            //     return ['product_type' => $prodCat];
            // })->values()->toArray();
            $productCategoryArray = array_map(function ($prodCat) use ($brandCategory) {
                return ['product_type' => $prodCat, 'brand_category_id' => $brandCategory->brand_cat_id];
            }, $item['productCategories']);
            // dd($productCategoryArray);
            $brandCategory->productTypes()->insert($productCategoryArray);
        }

    }
}
