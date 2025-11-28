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
    public $follow;
    public function __construct(Follow $follow)
    {
        $this->follow = $follow;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('follower.' . $this->follow->follower_id),
            new PrivateChannel('following.' . $this->follow->user_id)
        ];
    }
    // In UserFollowerEvent.php

    public function broadcastWith(): array
    {
        // 1. Find the User who was just followed (The "Leader")
        // We use user_id because in the 'follows' table, user_id is the person being followed.
        $personIFollowed = User::find($this->follow->user_id);
        $personIFollower = User::find($this->follow->follower_id);
        // 2. Send ONLY the data the frontend needs (match your Controller's load format)
        return [
            'new_following' => [
                'id' => $personIFollowed->id,
                'name' => $personIFollowed->name,
                'username' => $personIFollowed->username,
                'avatar_url' => $personIFollowed->avatar_url,
                'email' => $personIFollowed->email,
            ],
            'new_follower' => [
                'id' => $personIFollower->id,
                'name' => $personIFollower->name,
                'username' => $personIFollower->username,
                'avatar_url' => $personIFollower->avatar_url,
                'email' => $personIFollower->email,
            ],
        ];
    }
}
