<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use HttpException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function PHPUnit\Framework\returnSelf;

class MainAuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);
        //not sure maybe we dont have to show this for security reason
        $user = User::where('email', $validated['email'])->first();
        if (is_null($user)) {
            return redirect()->back()->withErrors(['Cannot find user'], 'not_found_user');
        }
        if (!Auth::attempt($validated)) {
            return redirect()->back()->withErrors(['Credentials Error'], 'not_found_user');
        }
        if ($user->role_id === Role::CUSTOMER) {
            session(['is_validated' => true, 'is_guest' => false]);
            return redirect()->route('home.dashboard.customer');
        }
        if ($user->role_id === Role::ADMIN) {
            session(['is_validated' => true, 'is_guest' => false]);
            return redirect()->route('home.dashboard.admin');
        }
        if ($user->role_id === Role::DISTRIBUTOR) {
            session(['is_validated' => true, 'is_guest' => false]);
            return redirect()->route('home.dashboard.distributor');
        }
        //add for guest role
        throw new HttpException(code: 404);
    }
    public function show()
    {
        //can add logic for this
        return Inertia::render('Components/Core/Landing');
    }
}
