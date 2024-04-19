<?php

namespace App\Models\Distributor;

use App\Models\Admin\BrandCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductType extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_type',
        'brand_category_id'
    ];
    protected $table = 'product_types';
    public $timestamps = false;
    public function brandCategory(): BelongsTo
    {
        return $this->belongsTo(BrandCategory::class, 'brand_category_id', 'brand_cat_id');
    }
    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'type_id');
    }
}
