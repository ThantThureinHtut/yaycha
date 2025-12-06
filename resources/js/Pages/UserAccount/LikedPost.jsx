import Blog from "@/Components/Blogs/Blog";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function LikedPost({ posts }) {
    console.log(posts);

    return (
        <div>
            <Header/>
            <div className="p-6">
            <div className="container flex flex-col justify-center gap-4 mx-auto lg:w-1/2">
                <h1 className="text-lg font-bold">Your Liked Posts</h1>
                <p>{posts.length < 1 ? `${posts.length} Post` : `${posts.length} Posts`} </p>
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
