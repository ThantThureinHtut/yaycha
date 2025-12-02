import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";
export default function usePostEcho(setPosts, filterUserId = null) {
    const { auth } = usePage().props;
    let channel = null;
    let followChannel = null;
    let channelName = null;
    let followChannelName = null;

    const formatNumber = (num) => {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
        }).format(num);
    };
    useEffect(() => {
        // 1. Connect ONCE
        if (filterUserId) {
            // if user is use and access this usePostEcho with user id , show there data in their dashboard
            channelName = `user.${filterUserId}`;
            followChannelName = `follower.${filterUserId}`;
            channel = window.Echo.private(channelName);
            followChannel = window.Echo.private(followChannelName);
        } else {
            // if user is use and access this usePost Echo from home which is Public
            channelName = "feed";
            followChannelName = `follower.${auth.user.id}`;
            channel = window.Echo.channel(channelName);
            followChannel = window.Echo.private(followChannelName);
            // Listen the View count
        }

        // Listen The Post
        channel.listen("PostCreatedEvent", (e) => {
            setPosts((prevPosts) => {
                // 🛡️ THE GUARD: Check if we already have this Post ID
                // This solves the duplication from Strict Mode or Re-renders
                const alreadyExists = prevPosts.some(
                    (post) => post.id === e.post.id
                );
                if (alreadyExists) {
                    return prevPosts; // Stop! Don't add it again.
                }
                // If clean, add it to the top
                return [e.post, ...prevPosts];
            });
        });

        // Post View Event
        channel.listen("PostViewEvent", (e) => {
            setPosts((prevPosts) => {
                return prevPosts.map((post) => {
                    if (post.id == e.view.post_id) {
                        // it is check for user who is already view or not.
                        // only increase the view count if user didn't view
                        const currentView = post.views || [];
                        const alreadyViewed = currentView.some(
                            (viewItem) => viewItem.user_id === e.view.user_id
                        );
                        // If doesn't exist , append the new data to the views
                        // If exist return the old post
                        if (!alreadyViewed) {
                            return {
                                ...post,
                                views: [...post.views, e.view],
                                views_count: e.view_count,
                                views_count_formatted: formatNumber(
                                    e.view_count
                                ),
                            };
                        } else {
                            return post;
                        }
                    }
                    return post;
                });
            });
        });

        // Follow Private Noti
        followChannel.listen("FollowPrivateNotification", (e) => {
            toast("Yaycha", {
                description: `${e.username} is following you !!`,
                action: {
                    label: "See",
                     onClick: () => {
                        router.get(
                            route("account.show", {
                                id: e.id,
                            })
                        );
                    },
                },
            });
        });

        // 2. CLEANUP (Very Important)
        // When user leaves the page, cut the connection.
        return () => {
            if (channel) {
                channel.stopListening("PostViewEvent");
                channel.stopListening("PostCreatedEvent");
            }
            if (followChannel) {
                followChannel.stopListening("FollowPrivateNotification");
            }
            // Then leave the channel completely
            if (channelName) window.Echo.leave(channelName);
            if (followChannelName) window.Echo.leave(followChannelName);
        };
    }, [filterUserId]);
}
