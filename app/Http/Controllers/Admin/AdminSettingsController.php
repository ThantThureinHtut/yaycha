<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminSettingsController extends Controller
{
    public function settings()
    {
        return Inertia::render("Admin/AdminSettings");
    }
}
