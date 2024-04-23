<?php

namespace App\Models\Admin;

use App\Models\Distributor\Brand;
use Database\Factories\Admin\MerchantStoreFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MerchantStore extends Model
{
    use HasFactory;
    use HasUuids;
    protected $fillable = [
        'store_name',
        'admin_id',
        'is_open',
        'fk_class_id'
    ];
    protected $primaryKey = 'store_id';
    protected $table = 'merchant_stores';
    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'admin_id');
    }
    public function brands(): HasMany
    {
        return $this->hasMany(Brand::class, 'store_id', 'store_id');
    }
    public function merchantStoreClass(): BelongsTo
    {
        return $this->belongsTo(MerchantStoreClass::class, 'fk_class_id', 'class_id');
    }
    protected static function factory(): Factory
    {
        return MerchantStoreFactory::new();
    }
}
