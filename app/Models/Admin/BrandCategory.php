<?php

namespace App\Models\Admin;

use App\Models\Distributor\Brand;
use Database\Factories\Admin\BrandCategoryFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BrandCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_name'
    ];
    protected $primaryKey = 'brand_cat_id';
    public $timestamps = false;
    protected $table = 'brand_categories';

    public function brands(): HasMany
    {
        return $this->hasMany(Brand::class, 'category_id', 'brand_cat_id');
    }
    public function merchantStoreClass(): BelongsTo
    {
        return $this->belongsTo(MerchantStoreClass::class, 'fk_class_id', 'class_id');
    }
    protected static function factory(): Factory
    {
        return BrandCategoryFactory::new();
    }
}
