<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{
    public function login(Request $request){
        $validator= Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($validator->fails()){
            return redirect()->route('home')
                    ->withError($validator);
        }
        $validated = $validator->validated();
        // dd($validated);
        $user = User::where('email', $validated['email'])->first();
        //bring back to login page for admin
        if (is_null($user)){
            return redirect()->route('home');
        }
        //create a unauthorize page
        if ($user->role_id !== Role::ADMIN){
            return redirect()->route('home')
                    ->with('error', ['test with errors']);
        }
        //bring back to login page for admin
        if (!Auth::attempt($validated)){
            return redirect()->route('home')->withErrors(['error' => 'test with errors'], 'authError');
        }
        return response()->redirectTo('authorize');
    }

}
