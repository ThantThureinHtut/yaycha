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
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Separator } from "@/Components/ui/separator";
import { Link, router, usePage } from "@inertiajs/react";
import { ArrowLeft, Edit } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import BlueMark from "@/Components/BlueMark";

export default function AccountInformation({ posts: initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
    const { auth } = usePage().props;
    const isFollow = auth.user.followers.some((follower) => {
        return auth.user.followings.some(
            (following) => following.id === follower.id
        );
    });
    usePostEcho(setPosts, auth.id);
    // Follow Submit Function
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
                                            src={auth.user?.avatar_url}
                                        />
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-xl sm:text-2xl">
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    @{auth.user?.username}
                                                </span>
                                                {auth.user
                                                    ?.bluemark_boolean && (
                                                    <BlueMark />
                                                )}
                                            </div>
                                        </CardTitle>
                                        <CardDescription className="text-sm sm:text-md">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    {/* Followers */}
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            {" "}
                                                            <span>
                                                                {auth.user
                                                                    .followers_count_formatted ||
                                                                    0}{" "}
                                                                followers
                                                            </span>
                                                        </DialogTrigger>
                                                        <DialogContent className="min-h-screen h-full overflow-y-auto custom-scrollbar flex flex-col">
                                                            <DialogHeader>
                                                                <DialogTitle className="flex items-start">
                                                                    Your
                                                                    followers (
                                                                    {auth.user
                                                                        .followers_count_formatted ||
                                                                        0}
                                                                    )
                                                                </DialogTitle>
                                                                <DialogDescription className="hidden"></DialogDescription>
                                                            </DialogHeader>
                                                            <div>
                                                                {auth.user.followers.map(
                                                                    (
                                                                        follow
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                follow.id
                                                                            }
                                                                        >
                                                                            <div className="flex items-center justify-between mb-3">
                                                                                <div className="flex items-center gap-4">
                                                                                    <Avatar className="size-10">
                                                                                        <AvatarImage
                                                                                            src={
                                                                                                follow?.avatar_url
                                                                                            }
                                                                                        />
                                                                                    </Avatar>
                                                                                    <div className="flex flex-col  text-xs sm:text-sm">
                                                                                        <h1 className="flex gap-1">
                                                                                            {
                                                                                                follow.name
                                                                                            }
                                                                                            <b className="text-blue-500">
                                                                                                (@
                                                                                                {
                                                                                                    follow.username
                                                                                                }
                                                                                                )
                                                                                            </b>
                                                                                        </h1>
                                                                                        <h2>
                                                                                            {
                                                                                                follow.email
                                                                                            }
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <Button
                                                                                        variant="outline"
                                                                                        className=" text-xs sm:text-sm"
                                                                                        onClick={() =>
                                                                                            followHandler(
                                                                                                follow.id
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {isFollow
                                                                                            ? "Unfollow"
                                                                                            : "Follow back"}
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                            <Separator />
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <Separator
                                                        orientation="vertical"
                                                        className="h-4"
                                                    />
                                                    {/* Followings */}
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            {" "}
                                                            <span>
                                                                {auth.user
                                                                    ?.followings_count_formatted ||
                                                                    0}{" "}
                                                                followings
                                                            </span>
                                                        </DialogTrigger>
                                                        <DialogContent className="min-h-screen h-full overflow-y-auto custom-scrollbar flex flex-col">
                                                            <DialogHeader>
                                                                <DialogTitle className="flex items-start">
                                                                    Your
                                                                    followings (
                                                                    {auth.user
                                                                        .followings_count_formatted ||
                                                                        0}
                                                                    )
                                                                </DialogTitle>
                                                                <DialogDescription className="hidden"></DialogDescription>
                                                            </DialogHeader>
                                                            <div>
                                                                {auth.user.followings.map(
                                                                    (
                                                                        follow
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                follow.id
                                                                            }
                                                                        >
                                                                            <div className="flex items-center justify-between mb-3">
                                                                                <div className="flex items-center gap-2">
                                                                                    <Avatar className="size-10">
                                                                                        <AvatarImage
                                                                                            src={
                                                                                                follow?.avatar_url
                                                                                            }
                                                                                        />
                                                                                    </Avatar>
                                                                                    <div className="flex flex-col text-xs sm:text-sm ">
                                                                                        <h1 className="flex gap-1">
                                                                                            {
                                                                                                follow.name
                                                                                            }
                                                                                            <b className="text-blue-500">
                                                                                                (@
                                                                                                {
                                                                                                    follow.username
                                                                                                }
                                                                                                )
                                                                                            </b>
                                                                                        </h1>
                                                                                        <h2>
                                                                                            {
                                                                                                follow.email
                                                                                            }
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <Button
                                                                                        variant="outline"
                                                                                        className=" text-xs sm:text-sm"
                                                                                        onClick={() =>
                                                                                            followHandler(
                                                                                                follow.id
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                       {!isFollow ? "Follow" : "Unfollow" }
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                            <Separator />
                                                                        </div>
                                                                    )
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
                                <Link href={route("account.edit")}>
                                    <Button>
                                        <Edit />
                                        Edit profile
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <Separator className="mb-8" />
                        <CardContent className="p-0 md:p-6">
                            <CardTitle className="pl-4 md:pl-0">
                                Your Posts
                            </CardTitle>
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
