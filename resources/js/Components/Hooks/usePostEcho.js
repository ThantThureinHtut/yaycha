import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function usePostEcho(
    setPosts,
    filterUserId = null,
    setUser = null // to make the follow and unfollow user data update useState
) {
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
            followChannelName = `following.${filterUserId}`;
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

        // Follow
        followChannel.listen("UserFollowerEvent", (e) => {
            console.log("Listen Data" , e);
            setUser((prevUser) => {
                // Check the user exist , not -> return nothing , yes -> run rest
                if (!prevUser) return;

                // Checking the followers and filtering the existing user.
                const currentFollow = prevUser.followers || []
                const alreadyFollow = currentFollow.some((follow) => follow.id === e.new_follower.id )

                if(alreadyFollow) {
                    // if user is already exsit , return original value
                    return prevUser;
                }
                // if not , add the new follower user id ,
                // you(user1) follow the user 2
                // user 1 POV: you(following user)
                // user 2 POV : you(follower)
                return {
                    ...prevUser,
                    followers: [...prevUser.followers , e.new_follower ],
                    followers_count: prevUser.followers_count + 1,
                    followers_count_formatted: formatNumber(prevUser.followers_count + 1)
                }


            });
        });

        // 2. CLEANUP (Very Important)
        // When user leaves the page, cut the connection.
        return () => {
            window.Echo.leave(channelName);
            window.Echo.leave(followChannelName);
        };
    }, []);
}
