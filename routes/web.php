<?php

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\ViewController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::redirect('/', '/login');

Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect']);

Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback']);


// Home route and Load the posts
Route::get('/home', function () {
    $posts = Post::with(['user:id,username,email,bluemark,avatar_url', 'likes.user:id,username,bluemark,avatar_url' , 'views.user:id,username,bluemark,avatar_url', 'comments.user:id,username,bluemark,avatar_url' , 'saveds']) // Load user and likes data efficiently
    ->withCount(['likes' , 'views' , 'comments']) // Automatically counts likes as 'likes_count'
    ->latest()
    ->get();

    return Inertia::render('Home', ['posts' => $posts]);
})->middleware(['auth', 'verified'])->name('home');

Route::get('/search/', function () {
    return Inertia::render('SearchPage');
});
Route::group(['prefix' => '/post'], function () {
    Route::get('/post_dashboard/', [PostController::class, 'index'])->name('post.dashboard');
    Route::post('/post_create', [PostController::class, 'post'])->name('post.create');
    Route::get('/post_views'  , [ViewController::class , 'index'])->name('post.view');
    Route::post('/post_views_store'  , [ViewController::class , 'store'])->name('post.viewStore');
    Route::post('/generate-title', [PostController::class, 'generateTitle'])
        ->name('post.generate-title')
        ->middleware('auth');
});


Route::group(['prefix' => '/acccount/'], function () {
    Route::get('/', [ProfileController::class, 'account'])->name('account.dashboard');
    Route::group(['prefix' => '/profile_edit'], function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('account.edit');
        Route::post('/update', [ProfileController::class, 'update'])->name('profile.edit');
        Route::post("/delete", [ProfileController::class, 'destory'])->name('account.delete');
    });
});



require __DIR__ . '/auth.php';
