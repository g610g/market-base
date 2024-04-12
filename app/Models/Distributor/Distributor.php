<?php

namespace App\Models\Distributor;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Distributor extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = [
        'description'
    ];
    protected $hidden= [
        'distributor_id'
    ];
    protected $primaryKey = 'distributor_id';
    public $timestamps = false;
    public  function user():BelongsTo{
        return $this->belongsTo(User::class, 'distributor_id', 'id');
    }
}
