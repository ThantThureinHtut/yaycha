import React, { useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useTheme } from "@/src/Context/ThemeContext";
import Blog from "@/Components/Blogs/Blog";
import usePostEcho from "@/Components/Hooks/usePostEcho";
export default function Home({ posts: initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
    usePostEcho(setPosts);
    return (
        <GuestLayout>
            <div>
                <div>
                    {posts.map((post) => (
                    <Blog key={post.id} post={post}  />
                ))}
                </div>

            </div>
        </GuestLayout>
    );
}
