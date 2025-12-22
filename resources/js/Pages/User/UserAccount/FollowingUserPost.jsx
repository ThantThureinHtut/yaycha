import Blog from "@/Components/Blogs/Blog";
import Header from "@/Components/Header";
import usePostEcho from "@/Components/Hooks/usePostEcho";
import { useState } from "react";

export default function FollowingUserPost({ posts: initalPosts }) {
    const [posts, setPosts] = useState(initalPosts);
    usePostEcho(setPosts);
    return (
        <div>
            <Header />
            <div className="p-0 md:p-6">
                <div className="container flex flex-col justify-center gap-4 mx-auto lg:w-1/2 px-6 py-4 md:px-0 md:py-0">
                    <h1 className="text-lg font-bold">Your Following User Posts</h1>
                </div>
                <div>
                    {posts.map((post) => (
                        <Blog key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
