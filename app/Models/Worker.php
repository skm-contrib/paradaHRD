<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Worker extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'post', 'sex', 'salary', 'phone_number', 'vacation', 'mail', 'password'];
}
