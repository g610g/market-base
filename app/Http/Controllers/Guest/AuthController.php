<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\Guest\Guest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $guest = Guest::create();
        session(['guest_id' => $guest->id, 'is_guest' => true]);
        $session = $request->session()->get('guest_id');
        return Inertia::render('GuestLogin', ['sessionData' => $session]);
    }
    public function loginView()
    {
        return Inertia::render('GuestLogin');
    }
}
