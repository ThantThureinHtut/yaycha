import React, { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useTheme } from "@/src/Context/ThemeContext";
import Blog from "@/Components/Blogs/Blog";

export default function Home({ posts: initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
    // 1. Connect ONCE
    const channel = window.Echo.channel("feed");

    channel.listen('PostCreatedEvent', (e) => {
        setPosts((prevPosts) => {
            // 🛡️ THE GUARD: Check if we already have this Post ID
            // This solves the duplication from Strict Mode or Re-renders
            const alreadyExists = prevPosts.some(post => post.id === e.post.id);
            if (alreadyExists) {
                return prevPosts; // Stop! Don't add it again.
            }
            // If clean, add it to the top
            return [e.post, ...prevPosts];
        });
    });

    // 2. CLEANUP (Very Important)
    // When user leaves the page, cut the connection.
    return () => {
        window.Echo.leave("feed");
    };

}, []);

    return (
        <GuestLayout>
            <div>
                {posts.map((post) => (
                    <Blog key={post.id} post={post} />
                ))}
            </div>
        </GuestLayout>
    );
}
