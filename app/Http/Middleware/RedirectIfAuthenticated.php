<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

use function PHPUnit\Framework\returnSelf;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                //checks the role of the current user and redirects to its corresponding dashboard
                if ($request->user()->role_id === Role::CUSTOMER) {
                    return redirect()->route('home.dashboard.customer');
                } elseif ($request->user()->role_id === Role::ADMIN) {
                    return redirect()->route('home.dashboard.admin');
                }
                return redirect()->route('home.dashboard.distributor');
            }
        }

        return $next($request);
    }
}
