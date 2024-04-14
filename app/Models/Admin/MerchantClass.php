<?php

namespace App\Models\Admin;

use Database\Factories\Admin\MerchantClassFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MerchantClass extends Model
{
    use HasFactory;
    protected $fillable = [
        'class_name'
    ];
    protected $table = 'merchant_class';
    public function merchantStores(): HasMany
    {
        return $this->hasMany(MerchantStore::class, 'class_id', 'id');
    }
    protected static function newFactory(): Factory
    {
        return  MerchantClassFactory::new();
    }
}
