<?php

namespace App\Http\Requests;

class CourseApiRequest extends ApiFormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'string',
            'description' => 'string',
            'percentComplete' => 'integer',
            'favorite' => 'boolean',
        ];
    }
}
