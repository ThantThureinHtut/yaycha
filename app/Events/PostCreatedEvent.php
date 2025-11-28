<?php

namespace App\Events;

use App\Models\Post;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PostCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $post;
    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('feed'),
            new PrivateChannel('user.' . $this->post->user_id)
        ];
    }
    public function broadcastWith(): array
    {
       // 1. Re-Load Relationships (Worker needs this)
    $this->post->load([
        'user:id,username,email,bluemark,avatar_url',
        'likes',
        'comments',
        'views',
        'saveds'
    ]);

    // 2. Re-Load Counts (Worker needs this too!)
    $this->post->loadCount(['likes', 'views', 'comments']);

    // 3. Convert to Array (Prevents "Serialization of Closure" errors)
    return [
        'post' => $this->post->toArray()
    ];
    }
}
