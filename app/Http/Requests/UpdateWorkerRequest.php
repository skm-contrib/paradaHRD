<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateWorkerRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => [''],
            'phone_number' => [''],
            'mail' => [''],
            'post' => [''],
            'sex' => [''],
            'salary' => [''],
            'vacation' => [''],
            'sick' => [''],
            'password' => [''],
        ];
    }
}
