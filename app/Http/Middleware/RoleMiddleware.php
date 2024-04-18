<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): mixed
    {
        $UserRole = $request->user()->returnRole();
        if ($role !== $UserRole) {
            return redirect()->back()->withErrors(['You are unauthorized to this page'], 'error_message');
        }
        return $next($request);
    }
}
