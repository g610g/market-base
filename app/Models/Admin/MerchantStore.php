<?php

namespace App\Models\Admin;

use Database\Factories\Admin\MerchantStoreFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MerchantStore extends Model
{
    use HasFactory;
    use HasUuids;
    protected $fillable = [
        'store_name',
        'admin_id',
        'is_open'
    ];
    protected $primaryKey = 'store_id';

    public function merchantClass(): BelongsTo
    {
        return $this->belongsTo(MerchantClass::class, 'class_id', 'id');
    }
    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'admin_id');
    }
    protected static function factory(): Factory
    {
        return MerchantStoreFactory::new();
    }
}
