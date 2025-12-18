<?php

namespace App\Http\Controllers;

use App\Events\PostCreatedEvent;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render(("User/Blog/PostCreatePage"));
    }
    public function post(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required' , 'max:120'],
            'body' => ['required']
        ]);

        $post = Post::create([
            'title' => $validated['title'],
            'description' => $validated['body'],
            'user_id' => Auth::user()->id
        ]);

        // $post->load([
        //     'user:id,username,email,bluemark,avatar_url',
        //     // You might want to initialize empty relations too so React doesn't crash on .map()
        //     'likes',
        //     'comments',
        //     'views',
        //     'saveds'
        // ]);
        // $post->loadCount(['likes', 'views', 'comments']);


        // broadcast(new PostCreatedEvent($post))->toOthers();
        PostCreatedEvent::dispatch($post);
        return Redirect::route('home');
    }
    public function generateTitle(Request $request)
    {
        $request->validate(['body' => 'required|string|min:5']);
        $apiKey = env('GROQ_API_KEY');
        // $response = Http::withHeaders(['Content-Type' => 'application/json'])
        //     ->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={$apiKey}", [
        //         'contents' => [
        //             [
        //                 'parts' => [
        //                     [
        //                         'text' => "Generate one descriptive, SEO-friendly title for the following content.
        //                                     Do not include quotes or extra commentary.
        //                                     Return only the final title: " . $request->body
        //                     ]
        //                 ]
        //             ]
        //         ]
        //     ]);

        $response = Http::withToken($apiKey)->post('https://api.groq.com/openai/v1/chat/completions', [

            // ✅ THE FREE TIER KING: 14,400 requests per day
            'model' => 'llama-3.1-8b-instant',

            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'Generate a short, catchy, 6-word title for this post. Do not use quotes.'
                ],
                [
                    'role' => 'user',
                    'content' => $request->body
                ]
            ],
            'temperature' => 0.7, // Creativity
            'max_tokens' => 50,   // Speed limit
        ]);


        $data = $response->json();
        // $output = $data['candidates'][0]['content']['parts'][0]['text'] ?? 'Error generating title';
        $output = $data['choices'][0]['message']['content'] ?? 'Error generating title';
        $title = trim(str_replace(['"', '*'], '', $output));

        return response()->json([
            'title' => $title
        ]);
    }

    public function delete(Request $request)
    {
        $request->user()->posts()->where("id", $request->post_id)->delete();
        return redirect()->back();
    }

    public function edit($id){
        $post = Post::where('id' , $id)->withCount(['likes' , 'comments' , 'views'])->first();
        return Inertia::render("User/Blog/PostEditPage" , ["post" => $post]);
    }
    public function update(Request $request)
    {
        $request->validate([
             'title' => ['required' , 'max:120'],
             'body' => ['required']
        ]);
        $post = $request->user()->posts()->where("id", $request->post_id);
        if (isset($request->title) && isset($request->body)) {
            $post->update([
                'title' => $request->title,
                'description' => $request->body,
            ]);
        }
        isset($request->title) ? $post->update(['title' => $request->title]) : $post->update(['description' => $request->body]);
        return  redirect()->back();
    }

}
