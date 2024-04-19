<?php

namespace App\Models\Distributor;

use Database\Factories\Distributor\InventoryFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Inventory extends Model
{
    use HasFactory;
    protected $fillable = [
        'products_quantity'
    ];
    public $timestamps = false;
    protected $table = 'inventories';

    public function distributor(): BelongsTo
    {
        return $this->belongsTo(Distributor::class, 'dist_id', 'distributor_id');
    }
    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'inventory_id');
    }
    protected static function factory(): Factory
    {
        return InventoryFactory::new();
    }
}
