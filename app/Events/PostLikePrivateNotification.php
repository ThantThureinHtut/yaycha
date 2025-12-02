<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PostLikePrivateNotification implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $postOwnerId;
    public $currentUser;
    public $postId;

    public function __construct($postOwnerId, User $currentUser, $postId)
    {
        $this->postOwnerId = $postOwnerId;
        $this->currentUser = $currentUser;
        $this->postId = $postId;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel("like.{$this->postOwnerId}"),
        ];
    }
    public function broadcastWith(): array
    {
        return [
            'username' => $this->currentUser->username,
            'email' => $this->currentUser->email,
            'userId' => $this->currentUser->id,
            'postId' => $this->postId,
        ];
    }
}
