import Blog from "@/Components/Blogs/Blog";
import Header from "@/Components/Header";
import usePostEcho from "@/Components/Hooks/usePostEcho";
import PostCreateBox from "@/Components/Posts/PostCreateBar";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

import { Separator } from "@/Components/ui/separator";
import { Link, usePage } from "@inertiajs/react";
import { ArrowLeft, Edit } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function AccountInformation({ posts: initialPosts , followingUser = null}) {
    const [posts, setPosts] = useState(initialPosts);
    const { auth } = usePage().props;

    // Is Follow State
    const [isFollow , setIsFollow] = useState(() => {
        return auth.user.followings.some(following => following.id === followingUser.id)
    });

    // Post Echo for Realtime Update
   usePostEcho(setPosts);

    // Follow Unfollow Mutation
   const followingMutation = useMutation({
        mutationFn: () => {
             return axios.post(route('account.follow.store' , followingUser.id))
        },
        onMutate: () => {
            setIsFollow((prev) => !prev);
        }
    })

    // Follow Unfollow Submit Handler
     const followSubmitHandler =  () => {
        followingUser.followers_count = isFollow ? followingUser.followers_count - 1 : followingUser.followers_count + 1;
        followingMutation.mutate();
    }

    return (
        <div className="container mx-auto">
            <div className="hidden sm:block">
                <Header />
            </div>
            <div>
                <div className="bg-secondary p-4 shadow-sm block sm:hidden">
                    <Link href="/home">
                        <ArrowLeft />
                    </Link>
                </div>

                <div>
                    <Card className="rounded-none sm:my-6 shadow-none border-none dark:bg-transparent">
                        <CardHeader>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between ">
                                <div className="flex flex-col  sm:flex-row sm:items-center gap-3 sm:gap-7">
                                    <Avatar className=" w-24 h-24">
                                        <AvatarImage
                                            src={followingUser?.avatar_url}
                                        />
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-xl sm:text-2xl">
                                            <div className="flex items-center gap-3">
                                                <span>@{followingUser?.username}</span>
                                                <Button variant={isFollow ? 'outline' : 'default'} onClick={followSubmitHandler} >{isFollow ? 'Unfollow' : 'Follow'}</Button>
                                            </div>
                                        </CardTitle>
                                        <CardDescription className="text-sm sm:text-md">
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    {followingUser.followers_count ||
                                                        0}{" "}
                                                    followers
                                                </span>
                                                <Separator orientation="vertical" className="h-4" />
                                                <span>
                                                    {followingUser
                                                        ?.followings_count ||
                                                        0}{" "}
                                                    followings
                                                </span>
                                            </div>
                                        </CardDescription>
                                    </div>
                                </div>

                            </div>
                        </CardHeader>
                        <Separator className="mb-8" />
                        <CardContent>
                            <CardTitle>{followingUser?.name}'s Posts</CardTitle>
                            <div className="rounded mt-4 mx-auto">
                                <PostCreateBox />
                            </div>

                            <div className="mt-6">
                                {posts.map((post) => (
                                    <Blog key={post.id} post={post} />
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
