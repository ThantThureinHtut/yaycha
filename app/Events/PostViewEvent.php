<?php

namespace App\Events;

use App\Models\Post;
use App\Models\View;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class PostViewEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $view;
    public function __construct(View $view)
    {
        $this->view = $view;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        $post = Post::find($this->view->post_id);
        return [
            new Channel('feed'),
            new PrivateChannel('user.' . $post->user_id)
        ];
    }
    public function broadcastWith():array {
        $this->view->load('user:id,username,email,bluemark,avatar_url');

        return [
            'view' => $this->view->toArray(),
            'view_count' => View::where('post_id' , $this->view->post_id)->count()
        ];

    }
}
