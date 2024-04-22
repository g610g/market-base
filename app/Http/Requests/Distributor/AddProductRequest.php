<?php

namespace App\Http\Requests\Distributor;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class AddProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'image' => ['required', File::image()->max(10 * 1024)],
            'productName' => ['required', 'string', 'min:2'],
            'productDescription' => ['required', 'string', 'min:10'],
            'variant' => ['required', 'string', 'min:2'],
            'productType' => ['required', 'string', 'min:2'],
            'brandName' => ['required', 'string', 'min:2'],
            'price' => ['integer', 'required']
        ];
    }
}
