<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function show(Request $request)
    {
        $customerInfo = $request->user()->customer;
        return Inertia::render('Components/Core/CustomerProfile', ['customerInfo' => $customerInfo, 'userInfo' => $request->user()]);
    }
    public function update(Request $request)
    {
        //we must send email to confirm for user updates?
        $validated = $request->validateWithBag('update', [
            'firstName' => 'required|min:1|string',
            'lastName' => 'required|min:1|string',
        ]);
        $user = $request->user();
        $user->first_name = $validated['firstName'];
        $user->last_name = $validated['lastName'];
        $user->save();
        return redirect()->back()->with('response', 'Successfully updated profile');
    }
}
