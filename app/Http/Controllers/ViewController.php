<?php

namespace App\Http\Controllers;

use App\Events\PostUpdatedEvent;
use App\Events\PostViewEvent;
use App\Models\Post;
use App\Models\View;
use Illuminate\Http\Request;
use App\Events\PostCreatedEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ViewController extends Controller
{

    public function store(Request $request){
        $view = View::updateOrCreate([
            'post_id' =>$request->post_id,
            'user_id' => Auth::user()->id
        ] ,[
            'post_id' => $request->post_id,
            'user_id' => Auth::user()->id,
        ]);

        PostViewEvent::dispatch($view);
        return response()->json([
            'status' => 'ok'
        ]);
    }
}
