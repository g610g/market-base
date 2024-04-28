<?php

namespace App\Models;

use App\Models\Customer\Cart;
use App\Models\Customer\Rating;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use HasFactory;
    use HasUuids;
    protected $fillable = [
        'customer_type',
        'profile_picture'
    ];
    protected $hidden = [
        'customer_id'
    ];
    protected $primaryKey = 'customer_id';
    public $timestamps = false;
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class, 'customer_id', 'customer_id');
    }
    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class, 'customer_id', 'customer_id');
    }
}
