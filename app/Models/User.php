<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Admin\Admin;
use App\Models\Distributor\Distributor;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUuids;

   protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function role():BelongsTo{
        $this->belongsTo(Role::class,'role_id', 'id');
    }
    public function customer():HasOne{
        if ($this->role_id !== Role::CUSTOMER){
            return null;
        }
        return $this->hasOne(Customer::class,'customer_id', 'id');
    }
    public function distributor():HasOne{
        if ($this->role_id !== Role::DISTRIBUTOR){
            return null;
        }
        return $this->hasOne(Distributor::class, 'distributor_id', 'id');
    }
    public function admin():HasOne{
        if ($this->role_id !== Role::ADMIN){
            return null;
        }
        return $this->hasOne(Admin::class, 'admin_id', 'id');
    }
}
