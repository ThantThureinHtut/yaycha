<?php

namespace App\Events;

use App\Models\User;
use App\Models\Follow;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserFollowerEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $follower;
    public $userId;
    public $is_unfollow;

    public function __construct($follower, $userId, $is_unfollow = false)
    {
        $this->follower = $follower;
        $this->userId = $userId;
        $this->is_unfollow = $is_unfollow;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
             new PrivateChannel("follower.{$this->userId}")
        ];
    }
}
