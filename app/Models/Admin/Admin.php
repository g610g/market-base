<?php

namespace App\Models\Admin;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Admin extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = [
        'description'
    ];
    protected $hidden = [
        'admin_id'
    ];
    public $timestamps = false;
    protected $primaryKey = 'admin_id';

    public  function user():BelongsTo{
        return $this->belongsTo(User::class, 'admin_id', 'id');
    }
}
