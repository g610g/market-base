<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function show(Request $request)
    {
        $customerInfo = $request->user()->customer;
        $customerInfo->profile_picture = base64_encode(Storage::get($customerInfo->profile_picture));
        return Inertia::render('Components/Core/CustomerProfile', ['customerInfo' => $customerInfo]);
    }
    public function update(Request $request): RedirectResponse
    {
        //we must send email to confirm for user updates?
        $validated = $request->validate([
            'firstName' => 'required|min:1|string',
            'lastName' => 'required|min:1|string',
            'image' =>  [File::image()->max(10 * 1024), 'required'],
            'phoneNumber' => ['required', 'regex:/^(09|\+639)\d{9}$/'],
        ]);

        $user = $request->user();
        $customer = $user->customer;
        if (is_null($customer)) {
            return redirect()->back()->withErrors(['error updating customer profile'], 'error');
        }
        if (!$request->has('image')) {
            $user->first_name = $validated['firstName'];
            $user->last_name = $validated['lastName'];
            $user->save();
            return redirect()->back()->with('response', 'Successfully updated profile');
        }
        try {
            Storage::delete($customer->profile_picture);
            $user->first_name = $validated['firstName'];
            $user->phone_number = $validated['phoneNumber'];
            $user->last_name = $validated['lastName'];
            $customer->profile_picture = Storage::putFile('', $request->file('image'));
            $user->save();
            $customer->save();
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors([$th->getMessage()], 'error');
        }
        return redirect()->back();
    }
}
