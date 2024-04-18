<?php

namespace App\Models\Distributor;

use App\Models\Admin\BrandCategory;
use App\Models\Admin\MerchantStore;
use Database\Factories\BrandFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Brand extends Model
{
    use HasFactory;
    use HasUuids;
    protected $fillable = [
        'brand_name',
        'store_id',
        'brand_cat_id'
    ];
    protected $primaryKey = 'brand_id';
    public $timestamps = false;
    public function distributor(): BelongsTo
    {
        return $this->belongsTo(Distributor::class, 'dist_id', 'distributor_id');
    }
    public function merchantStore(): BelongsTo
    {
        return $this->belongsTo(MerchantStore::class, 'store_id', 'store_id');
    }
    public function brandCategory(): BelongsTo
    {
        return $this->belongsTo(BrandCategory::class, 'category_id', 'brand_cat_id');
    }
    protected static function factory(): Factory
    {
        return BrandFactory::new();
    }
}
