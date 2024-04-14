<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
           'email' => 'required|email|string|unique:users,email',
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'password' => 'required|string|min:6',
            'phoneNumber' => 'required|string',
            'birthDate' => 'required|string',
            'country' => 'required|string',
            'province' => 'required|string',
            'brgyCity' => 'required|string',
            'type' => 'required|string'
        ];
    }
}
