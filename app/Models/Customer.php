<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customer extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = [
        'customer_type'
    ];
    protected $hidden= [
        'customer_id'
    ];
    protected $primaryKey = 'customer_id';
    public  $timestamps = false;
    public function user():BelongsTo{
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }
}
