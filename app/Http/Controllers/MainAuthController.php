<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MainAuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);
        $user = User::where('email', $validated['email'])->first();
        if (is_null($user)) {
            return redirect()->back()->withErrors(['Cannot find user'], 'not_found_user');
        }
        if (!Auth::attempt($validated)) {
            return redirect()->back()->withErrors(['Credentials Error'], 'not_found_user');
        }
        return redirect()->route('home.dashboard');


    }
}
