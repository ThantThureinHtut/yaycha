import React, { useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useTheme } from "@/src/Context/ThemeContext";
import Blog from "@/Components/Blogs/Blog";
import usePostEcho from "@/Components/Hooks/usePostEcho.jsx";
import PostCreateBar from "@/Components/Posts/PostCreateBar";
import PostCreatePage from "./User/Blog/PostCreatePage";
export default function Home({ posts: initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);


    usePostEcho(setPosts);

    // This make when real data is come i replace the fake data with new datas come form database
    // Important to know , The way to change the data
    useEffect(() => {
        setPosts(initialPosts)
    },[initialPosts])


    return (
        <GuestLayout>
            <div>
                {/* Pass the setPosts to the PostCreate Page to make the Optimistic UI Update post */}
                <PostCreateBar setPosts={setPosts} action="Post" />
                <div>
                    {posts.map((post) => (
                    <Blog key={post.id} post={post}  />
                ))}
                </div>

            </div>
        </GuestLayout>
    );
}
