<?php

namespace App\Models\Distributor;

use Database\Factories\Distributor\ProductsFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'is_available',
        'product_name',
        'description',
        'variant',
        'brand_id',
        'type_id',
        'price',
        'inventory_id'
    ];
    public $timestamps = false;
    protected $primaryKey = 'product_id';
    protected $table = 'products';

    public function productType(): BelongsTo
    {
        return $this->belongsTo(ProductType::class, 'type_id');
    }
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class, 'brand_id', 'brand_id');
    }
    public function inventory(): BelongsTo
    {
        return $this->belongsTo(Inventory::class, 'inventory_id');
    }
    protected static function factory(): Factory
    {
        return ProductsFactory::new();
    }
}
