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
import {
    Plus,
    ArrowUp,
    Heart,
    Save,
    MessageSquare,
    Eye,
    BadgeCheckIcon,
    BookmarkIcon,
    HeartIcon,
    Italic,
    MoreHorizontal,
    Edit,
} from "lucide-react";

import { Badge } from "@/Components/ui/badge";
import BlueMark from "../BlueMark";
import { Separator } from "../ui/separator";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ExpandableText from "./ExpandableText";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import formatNumber from "../Utils/formatNumber";
import usePostInteractions from "../Hooks/usePostInteractions";
import PostUpdate from "../Posts/PostUpdate";
import PostCreate from "../Posts/PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";


export default function Blog({ post: initalPost }) {
    const [post, setPost] = useState(initalPost);
    const { auth } = usePage().props;

    const [isPressed, setPressed] = useState(
        post.likes.some(
            (like) => like.post_id === post.id && like.like_id === auth.user.id
        )
    );
    // To Updat ethe setPost if the user InitalPost
    useEffect(() => {
        setPost(initalPost);
    }, [initalPost]);

    const { viewIn, likeIn } = usePostInteractions(
        post,
        auth,
        isPressed,
        setPressed
    );
    const viewSumbitHandler = () => {
        // check , if the user is exist , don't increase the view count
        // if not increae the count
        const currentView = post.views || [];
        const alreadyViewed = currentView.some(
            (view) => view.user_id === auth.user.id
        );
        if (alreadyViewed) return;
        viewIn.mutate();
    };
    const likeSubmitHandler = () => {
        likeIn.mutate();
        viewSumbitHandler();
    };

    return (
        <div className="container flex flex-col gap-8 mx-auto my-3 md:w-full lg:w-1/2 ">
            <Card className="rounded-none sm:rounded-xl ">
                <CardHeader>
                    <div className="flex  items-center justify-between">
                        <div className="flex items-center  gap-3">
                            <div className="">
                                {post.user.id === auth.user.id ? (
                                    <Link href={route("account.dashboard")}>
                                        <Avatar className="">
                                            <AvatarImage
                                                src={post.user?.avatar_url}
                                            />
                                        </Avatar>
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("account.show", {
                                            id: post.user.id,
                                        })}
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src={post.user?.avatar_url}
                                            />
                                        </Avatar>
                                    </Link>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <CardTitle className="whitespace-normal break-all w-full">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="flex justify-between">
                                    <span className="flex items-center gap-2 text-xs sm:text-base">
                                        <div> written by </div>
                                        <b className="flex items-center gap-2">
                                            <span className="text-blue-500">
                                                @{post.user.username}
                                            </span>
                                        </b>
                                        {post.user.bluemark_boolean ===
                                            true && <BlueMark />}
                                    </span>
                                </CardDescription>
                            </div>
                        </div>
                        <div className="flex  items-center gap-1">
                            <span className="flex items-center gap-2 p-2">
                                {post.views_count_formatted}
                                <Eye size={20} />
                            </span>
                            <PostUpdate
                                post={post}
                                likeSubmitHandler={likeSubmitHandler}
                                isPressed={isPressed}
                                setPost={setPost}
                            />

                        </div>
                    </div>
                </CardHeader>
                <Separator className="mb-4" />
                <CardContent>
                    <ExpandableText
                        blog={post}
                        viewSumbitHandler={viewSumbitHandler}
                    />
                </CardContent>
                <CardFooter>
                    <Card className="w-full">
                        <CardContent className="p-3">
                            <ul className="flex justify-between items-center  w-full text-gray-500 ">
                                <li className="flex items-center gap-1">
                                    {post.likes_count_formatted}
                                    <div onClick={likeSubmitHandler}>
                                        <Heart
                                            size={20}
                                            className={
                                                isPressed &&
                                                "fill-red-500 stroke-red-500"
                                            }
                                        />
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        href={route("post.comments.dashboard", {
                                            id: post.id,
                                        })}
                                        className="flex items-center gap-1"
                                    >
                                        {post.comments_count_formatted}
                                        <MessageSquare size={20} />
                                    </Link>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </CardFooter>
            </Card>
        </div>
    );
}
