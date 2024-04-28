<?php

namespace App\Models\Distributor;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Distributor extends Model
{
    use HasFactory;
    use HasUuids;
    protected $fillable = [
        'description',
        'profile_picture'
    ];
    protected $hidden = [
        'distributor_id'
    ];
    protected $primaryKey = 'distributor_id';
    public $timestamps = false;
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'distributor_id', 'id');
    }
    public function brands(): HasMany
    {
        return $this->hasMany(Brand::class, 'dist_id', 'distributor_id');
    }
    public function inventory(): HasOne
    {
        return $this->hasOne(Inventory::class, 'dist_id', 'distributor_id');
    }
}
