<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BluemarkController extends Controller
{
    public function index(){
        return Inertia::render('User/UserAccount/BluemarkVerified');
    }
    public function store(Request $request){

    }
}
