<?php

namespace App\Models\Admin;

use Database\Factories\Admin\MerchantStoreClassFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MerchantStoreClass extends Model
{
    use HasFactory;
    protected $fillable = [
        'class_name'
    ];
    protected $primaryKey = 'class_id';
    public $timestamps = false;
    protected $table = 'merchant_store_classification';

    public function brandCategories(): HasMany
    {
        return $this->hasMany(BrandCategory::class, 'fk_class_id', 'class_id');
    }
    public function merchantStore(): HasOne
    {
        return $this->hasOne(MerchantStore::class, 'fk_class_id', 'class_id');
    }
    protected static function factory(): Factory
    {
        return MerchantStoreClassFactory::new();
    }
}
