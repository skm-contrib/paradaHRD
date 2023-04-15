<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone_number' => $this->phone_number,
            'mail' => $this->mail,
            'post' => $this->post,
            'sex' => $this->sex,
            'salary' => $this->salary,
            'vacation' => $this->vacation,
            'sick' => $this->sick,
            'password' => $this->password
        ];
    }
}
