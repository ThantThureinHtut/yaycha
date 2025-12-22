import Blog from "@/Components/Blogs/Blog";
import Header from "@/Components/Header";
import usePostEcho from "@/Components/Hooks/usePostEcho.jsx";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Separator } from "@/Components/ui/separator";
import { Link, router, usePage } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import BlueMark from "@/Components/BlueMark";

export default function AccountInformation({
    posts: initialPosts,
    followingUser = null,
}) {
    const [posts, setPosts] = useState(initialPosts);
    const { auth } = usePage().props;

    // 1. Check if I (Logged in user) follow this Profile Owner (followingUser)
    // This controls the Big "Follow/Unfollow" button next to their name
    const isFollow = auth.user.followings.some(
        (following) => following.id === followingUser.id
    );

    // ❌ REMOVED: const authIsFollow = ... (This was the bug)

    // Post Echo for Realtime Update
    usePostEcho(setPosts);

    // Follow Unfollow Mutation (For the main profile button)
    const followingMutation = useMutation({
        mutationFn: () => {
            return router.post(
                route("account.follow.store", followingUser.id),
                {},
                { preserveScroll: true, preserveState: true }
            );
        },
    });

    // Follow Unfollow Submit Handler (For the main profile button)
    const followSubmitHandler = () => {
        followingUser.followers_count = isFollow
            ? followingUser.followers_count - 1
            : followingUser.followers_count + 1;
        followingMutation.mutate();
    };

    // Handler for the list buttons
    const followHandler = (id) => {
        router.post(
            route("account.follow.store", id),
            {},
            { preserveScroll: true, preserveState: true }
        );
    };

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
                                            <div className="flex items-center gap-5">
                                                <div className="flex items-center gap-2">
                                                    <span>
                                                        @
                                                        {
                                                            followingUser?.username
                                                        }
                                                    </span>
                                                    {followingUser?.bluemark_boolean && (
                                                        <BlueMark />
                                                    )}
                                                </div>
                                                {/* Main Profile Follow Button */}
                                                <Button
                                                    variant={
                                                        isFollow
                                                            ? "outline"
                                                            : "default"
                                                    }
                                                    onClick={
                                                        followSubmitHandler
                                                    }
                                                >
                                                    {isFollow
                                                        ? "Unfollow"
                                                        : "Follow"}
                                                </Button>
                                            </div>
                                        </CardTitle>
                                        <CardDescription className="text-sm sm:text-md">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    {/* --- FOLLOWERS DIALOG --- */}
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <span>
                                                                {followingUser.followers_count_formatted ||
                                                                    0}{" "}
                                                                followers
                                                            </span>
                                                        </DialogTrigger>
                                                        <DialogContent className="min-h-screen h-full overflow-y-auto custom-scrollbar flex flex-col">
                                                            <DialogHeader>
                                                                <DialogTitle className="flex items-start">
                                                                    {
                                                                        followingUser.username
                                                                    }
                                                                    's followers
                                                                </DialogTitle>
                                                                <DialogDescription className="hidden"></DialogDescription>
                                                            </DialogHeader>
                                                            <div>
                                                                {followingUser.followers.map(
                                                                    (
                                                                        follow
                                                                    ) => {
                                                                        // ✅ FIX 1: Calculate relationship for this specific person
                                                                        const isAuthFollowing =
                                                                            auth.user.followings.some(
                                                                                (
                                                                                    myFollowing
                                                                                ) =>
                                                                                    myFollowing.id ===
                                                                                    follow.id
                                                                            );

                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    follow.id
                                                                                }
                                                                            >
                                                                                <div className="flex items-center justify-between mb-3">
                                                                                    <Link
                                                                                        href={
                                                                                            follow.id ==
                                                                                            auth
                                                                                                .user
                                                                                                .id
                                                                                                ? route(
                                                                                                      "account.dashboard"
                                                                                                  )
                                                                                                : route(
                                                                                                      "account.show",
                                                                                                      follow.id
                                                                                                  )
                                                                                        }
                                                                                        className="flex items-center gap-4"
                                                                                    >
                                                                                        <Avatar className="size-10">
                                                                                            <AvatarImage
                                                                                                src={
                                                                                                    follow?.avatar_url
                                                                                                }
                                                                                            />
                                                                                        </Avatar>
                                                                                        <div className="flex flex-col text-xs sm:text-sm">
                                                                                            <b className="text-blue-500">
                                                                                                @
                                                                                                {
                                                                                                    follow.username
                                                                                                }
                                                                                            </b>

                                                                                            <h2>
                                                                                                {
                                                                                                    follow.email
                                                                                                }
                                                                                            </h2>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div>
                                                                                        {/* Don't show button if it's me */}
                                                                                        {follow.id !==
                                                                                            auth
                                                                                                .user
                                                                                                .id && (
                                                                                            <Button
                                                                                                variant="outline"
                                                                                                className="text-xs sm:text-sm"
                                                                                                onClick={() =>
                                                                                                    followHandler(
                                                                                                        follow.id
                                                                                                    )
                                                                                                }
                                                                                            >
                                                                                                {/* Use the local variable */}
                                                                                                {isAuthFollowing
                                                                                                    ? "Unfollow"
                                                                                                    : "Follow"}
                                                                                            </Button>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                                <Separator className="my-4" />
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <Separator
                                                        orientation="vertical"
                                                        className="h-4"
                                                    />

                                                    {/* --- FOLLOWINGS DIALOG --- */}
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <span>
                                                                {followingUser?.followings_count_formatted ||
                                                                    0}{" "}
                                                                followings
                                                            </span>
                                                        </DialogTrigger>
                                                        <DialogContent className="min-h-screen h-full overflow-y-auto custom-scrollbar flex flex-col">
                                                            <DialogHeader>
                                                                <DialogTitle className="flex items-start">
                                                                    {
                                                                        followingUser.username
                                                                    }
                                                                    's
                                                                    followings
                                                                </DialogTitle>
                                                                <DialogDescription className="hidden"></DialogDescription>
                                                            </DialogHeader>
                                                            <div>
                                                                {followingUser.followings.map(
                                                                    (
                                                                        follow
                                                                    ) => {
                                                                        // ✅ FIX 2: Calculate relationship for this specific person
                                                                        const isAuthFollowing =
                                                                            auth.user.followings.some(
                                                                                (
                                                                                    myFollowing
                                                                                ) =>
                                                                                    myFollowing.id ===
                                                                                    follow.id
                                                                            );

                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    follow.id
                                                                                }
                                                                            >
                                                                                <div className="flex items-center justify-between mb-3">
                                                                                    <Link
                                                                                        href={
                                                                                            follow.id ==
                                                                                            auth
                                                                                                .user
                                                                                                .id
                                                                                                ? route(
                                                                                                      "account.dashboard"
                                                                                                  )
                                                                                                : route(
                                                                                                      "account.show",
                                                                                                      follow.id
                                                                                                  )
                                                                                        }
                                                                                        className="flex items-center gap-2"
                                                                                    >
                                                                                        <Avatar className="size-10">
                                                                                            <AvatarImage
                                                                                                src={
                                                                                                    follow?.avatar_url
                                                                                                }
                                                                                            />
                                                                                        </Avatar>
                                                                                        <div className="flex flex-col text-xs sm:text-sm ">
                                                                                            <b className="text-blue-500">
                                                                                                @
                                                                                                {
                                                                                                    follow.username
                                                                                                }
                                                                                            </b>
                                                                                            <h2>
                                                                                                {
                                                                                                    follow.email
                                                                                                }
                                                                                            </h2>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div>
                                                                                        {follow.id !==
                                                                                            auth
                                                                                                .user
                                                                                                .id && (
                                                                                            <Button
                                                                                                variant="outline"
                                                                                                className="text-xs sm:text-sm"
                                                                                                onClick={() =>
                                                                                                    followHandler(
                                                                                                        follow.id
                                                                                                    )
                                                                                                }
                                                                                            >
                                                                                                {/* Use the local variable */}
                                                                                                {isAuthFollowing
                                                                                                    ? "Unfollow"
                                                                                                    : "Follow"}
                                                                                            </Button>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                                <Separator className="my-4" />
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                                <div>{auth.user?.bio}</div>
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
