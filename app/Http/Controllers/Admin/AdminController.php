<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Bluemark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\VerifiedAccountInfo;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function index()
    {
        $usersData = User::select(
            DB::raw('DATE_FORMAT(created_at , "%M") as month_number'),
            DB::raw('COUNT(*) as count')
        )
            ->whereYear('created_at', date('Y')) // Only this year
            ->groupBy('month_number')
            ->orderBy('month_number')
            ->get();

        $postData = Post::select(
            DB::raw('DATE_FORMAT(created_at , "%M") as month_number'),
            DB::raw('COUNT(*) as count')
        )
            ->whereYear('created_at', date('Y')) // Only this year
            ->groupBy('month_number')
            ->orderBy('month_number')
            ->get();

        // 2. Format the data for the Chart
        // We need to turn numbers (1, 2) into names ("Jan", "Feb")
        $userChartData = $usersData->map(function ($row) {
            return [
                // Convert month number (1) to name (January)
                'month' => $row->month_number,
                'users' => $row->count
            ];
        });

        $postChartData = $postData->map(function ($row) {
            return [
                // Convert month number (1) to name (January)
                'month' => $row->month_number,
                'users' => $row->count,
            ];
        });

        $userCounts = User::get()->count();
        $bluemarkUserCounts = Bluemark::get()->count();
        $verifiedUserCounts = VerifiedAccountInfo::get()->count();
        return Inertia::render('Admin/AdminDashboard', [
            'userCounts' => $userCounts,
            'bluemarkUserCounts' => $bluemarkUserCounts,
            'verifiedUserCounts' => $verifiedUserCounts,
            'userChartData' => $userChartData,
            'postChartData' => $postChartData
        ]);
    }



}
