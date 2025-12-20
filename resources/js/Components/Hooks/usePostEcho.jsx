import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import formatNumber from "../Utils/formatNumber";
import { icons, Verified } from "lucide-react";

export default function usePostEcho(setPosts, filterUserId = null) {
    const { auth } = usePage().props;
    let channel = null;
    let followChannel = null;
    let likeChannel = null;
    let channelName = null;
    let followChannelName = null;
    let likeChannelName = null;
    let statusChannel = null;
    let statusChannelName = null;

    useEffect(() => {
        // 1. Connect ONCE
        if (filterUserId) {
            // if user is use and access this usePostEcho with user id , show there data in their dashboard
            channelName = `user.${filterUserId}`;
            followChannelName = `follower.${filterUserId}`;
            likeChannelName = `like.${filterUserId}`;
            statusChannelName = `verifiedStatus.${filterUserId}`;
            channel = window.Echo.private(channelName);
            followChannel = window.Echo.private(followChannelName);
            likeChannel = window.Echo.private(likeChannelName);
            statusChannel = window.Echo.private(statusChannelName);
        } else {
            // if user is use and access this usePost Echo from home which is Public
            channelName = "feed";
            followChannelName = `follower.${auth.user.id}`;
            likeChannelName = `like.${auth.user.id}`;
            statusChannelName = `verifiedStatus.${auth.user.id}`;
            channel = window.Echo.channel(channelName);
            followChannel = window.Echo.private(followChannelName);
            likeChannel = window.Echo.private(likeChannelName);
            statusChannel = window.Echo.private(statusChannelName);
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
                if (prevPosts.length >= 1) {
                    return prevPosts.map((post) => {
                        if (post.id == e.view.post_id) {
                            // it is check for user who is already view or not.
                            // only increase the view count if user didn't view
                            const currentView = post.views || [];
                            const alreadyViewed = currentView.some(
                                (viewItem) =>
                                    viewItem.user_id === e.view.user_id
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
                } else {
                    // This is For Comment Page
                    const currentView = prevPosts.views || [];
                    const alreadyViewed = currentView.some(
                        (viewItem) => viewItem.user_id === e.view.user_id
                    );
                    if (!alreadyViewed) {
                        return {
                            ...prevPosts,
                            views: [...prevPosts.views, e.view],
                            views_count: e.view_count,
                            views_count_formatted: formatNumber(e.view_count),
                        };
                    } else {
                        return prevPosts;
                    }
                }
            });
        });

        // Post Like Event
        channel.listen("PostLikeEvent", (e) => {
            setPosts((prevPost) => {
                if (prevPost.length >= 1) {
                    return prevPost.map((post) => {
                        if (post.id === e.post_id) {
                            return {
                                ...post,
                                likes_count: e.likes_count,
                                likes_count_formatted: formatNumber(
                                    e.likes_count
                                ),
                            };
                        }
                        return post;
                    });
                } else {
                    // This is For CommentPage
                    return {
                        ...prevPost,
                        likes_count: e.likes_count,
                        likes_count_formatted: formatNumber(e.likes_count),
                    };
                }
            });
        });

        // Post Private Like Noti
        likeChannel.listen("PostLikePrivateNotification", (e) => {
            toast.custom((t) => (
                <div
                    className={`${
                        t.visible
                            ? "animate-toast-enter"
                            : "animate-toast-leave"
                    } max-w-md w-full bg-background shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={e.avatar_url}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-md font-bold text-primary">
                                    Yaycha
                                </p>
                                <p className="mt-1 text-sm text-gray-800 dark:text-white">
                                   <span className="text-blue-500 font-bold">@{e.username}</span> is liked your post!!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200 dark:border-secondary">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg py-2 px-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ));
        });
        // Follow Private Noti
        followChannel.listen("FollowPrivateNotification", (e) => {
            toast.custom((t) => (
                <div
                    className={`${
                        t.visible
                            ? "animate-toast-enter"
                            : "animate-toast-leave"
                    } max-w-md w-full bg-background shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={e.avatar_url}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-md font-bold text-primary">
                                    Yaycha
                                </p>
                                <p className="mt-1 text-sm text-gray-800 dark:text-white">
                                    <span className="text-blue-500 font-bold">@{e.username}</span> is following you!!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200 dark:border-secondary">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg py-2 px-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ));
        });

        // Verified Status Private Noti
        statusChannel.listen("VerifiedStatusPrivateNotification", (e) => {
            const iconCheck = () => {
                if (e.status == "success") {
                    return "👍";
                } else if (e.status == "rejected") {
                    return "🖕";
                }
            };

            const themeChangeFn = () => {
                const mediaQuery = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;

                if (localStorage.getItem("theme") == "system") {
                    return mediaQuery;
                } else if (localStorage.getItem("theme") == "dark") {
                    return true;
                } else if (localStorage.getItem("theme") == "light") {
                    return false;
                }
            };

            toast(`Your verification is ${e.status}`, {
                icon: iconCheck(),
                style: {
                    borderRadius: "10px",
                    background: themeChangeFn() ? "#333" : "#fff",
                    color: themeChangeFn() ? "#fff" : "#333",
                    border: "1px solid", // Define thickness and type
                    borderColor:
                        e.status == "success"
                            ? "#4ade80"
                            : "#f87171",
                },
            });
        });
        // 2. CLEANUP (Very Important)
        // When user leaves the page, cut the connection.
        return () => {

            if (followChannel)
                followChannel.stopListening("FollowPrivateNotification");

            if (likeChannel)
                likeChannel.stopListening("PostLikePrivateNotification");

            if (statusChannel)
                statusChannel.stopListening(
                    "VerifiedStatusPrivateNotification"
                );
            // Then leave the channel completely

            if (followChannelName) window.Echo.leave(followChannelName);
            if (likeChannelName) window.Echo.leave(likeChannelName);
            if (statusChannelName) window.Echo.leave(statusChannelName);
        };
    }, [filterUserId]);
}
