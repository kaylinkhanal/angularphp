<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'percentComplete', 'favorite'];

    protected $casts = [
        'favorite' => 'boolean'
    ];

}
