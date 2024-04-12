<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
        'role'
    ];
    public $timestamps = false;
    public const ADMIN = 1;
    public const DISTRIBUTOR = 2;
    public const CUSTOMER = 3;
    public function users():HasMany{
        return $this->hasMany(User::class, 'role_id', 'id');
    }
}
