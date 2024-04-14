<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Role;
use App\Models\User;
use HttpException;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

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
    public function showRegister()
    {
        return Inertia::render('Components/Core/Register');
    }
    public function register(RegisterRequest $request)
    {
        // dd(Carbon::createFromFormat('Y-m-d', $request->birthDate));
        if ($request->type === 'distributor') {
            try {
                $user = User::create([
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'email' => $request->email,
                'phone_number' => $request->phoneNumber,
                'password' => Hash::make($request->password),
                'role_id' => Role::DISTRIBUTOR,
                'birth_date' => Carbon::createFromFormat('Y-m-d', $request->birthDate),
                'city' => $request->brgyCity,
                'province' => $request->province,
                'country' => $request->country,
                'barangay' => fake()->sentence(3)
            ]);
                //dummy data for distribution dont yet know what to add
                $user->distributor()->create([
                    'description' => fake()->sentence(20)
                ]);
            } catch (\Throwable $th) {
                return redirect()->back();
            }
            Auth::attempt(['email' => $user->email, 'password' => $request->password]);
            session(['is_validated' => true, 'is_guest' => false]);
            return redirect()->route('home.dashboard.distributor');
        } elseif ($request->type === 'customer') {
            try {
                $user = User::create([
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'email' => $request->email,
                'phone_number' => $request->phoneNumber,
                'password' => Hash::make($request->password),
                'role_id' => Role::CUSTOMER,
                'birth_date' => Carbon::createFromFormat('Y-m-d', $request->birthDate),
                'city' => $request->brgyCity,
                'province' => $request->province,
                'country' => $request->country,
                'barangay' => fake()->sentence(3)
                //fake barangay change later change forms
            ]);
                $user->customer()->create([
                    'customer_type' => fake()->word()
                ]);
            } catch (\Throwable $th) {
                return redirect()->back()->withErrors($th->getMessage(), 'error_message');
            }
            Auth::attempt(['email' => $user->email, 'password' => $request->password]);
            session(['is_validated' => true, 'is_guest' => false]);
            return redirect()->route('home.dashboard.customer');
        } else {
            throw new HttpException('No user type selected', 404);
        }
    }
}
