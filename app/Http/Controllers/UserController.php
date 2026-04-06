<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show(Request $request, string $id){
        return Inertia::render('user/IndexUserPage', [
            'name' => 'Nguyễn Văn A',
            'age' => $id
        ]);
    }
}
