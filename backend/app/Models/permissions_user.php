<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class permissions_user extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'id_permission',
    ];
}
