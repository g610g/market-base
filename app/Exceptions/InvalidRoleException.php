<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InvalidRoleException extends Exception
{
    //custom renderable error handling
    public function __construct(private string $role)
    {
        parent::__construct();
    }

    public function render(Request $request)
    {
        return Inertia::render('Components/Core/NotFound');
        // return redirect()->back();
    }
}
