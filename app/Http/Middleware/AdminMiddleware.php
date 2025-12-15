<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
    //  */
        public function handle(Request $request, Closure $next): Response
        {
            // If user is NOT logged in OR is NOT an admin
            if (!Auth::check() || Auth::user()->role !== "superadmin") {
                // Kick them out to the normal dashboard or home
                return redirect('/home');
            }
            return $next($request);
        }
}
