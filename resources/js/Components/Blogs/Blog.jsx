import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

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
} from "lucide-react";

import { Badge } from "@/Components/ui/badge";
import BlueMark from "../BlueMark";
import { Separator } from "../ui/separator";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import ExpandableText from "./ExpandableText";
import axios from "axios";

import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { set } from "nprogress";
import formatNumber from "../Utils/formatNumber";
import usePostInteractions from "../Hooks/usePostInteractions";
export default function Blog({ post }) {
    const { auth } = usePage().props;
    const [isPressed, setPressed] = useState(post.likes.some((like) => like.post_id === post.id && like.like_id === auth.user.id));
    const { viewIn, likeIn } = usePostInteractions(post, auth, isPressed, setPressed);
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
        viewSumbitHandler()
    }
    return (
        <div className="container flex flex-col gap-8 mx-auto my-3  md:w-full lg:w-1/2">
            <Card  className="rounded-none md:rounded-xl">
                <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div>
                                {post.user.id === auth.user.id ? (
                                    <Link
                                        href={route("account.dashboard")}
                                    >
                                        <Avatar>
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
                            <div>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription className="flex justify-between">
                                    <span className="flex items-center gap-2 text-xs sm:text-base">
                                        <div> written by{" "}</div>
                                        <b className="flex items-center gap-2">
                                            <span className="text-blue-500">
                                                @{post.user.username}
                                            </span>
                                        </b>
                                        {post.user.bluemark_boolean === true && <BlueMark />}
                                    </span>
                                </CardDescription>
                            </div>
                        </div>

                        <span className="flex items-center gap-2">
                            {post.views_count_formatted}
                            <Eye size={20} />
                        </span>
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
                                    <Link href={route('post.comments.dashboard' , {id: post.id})} className="flex items-center gap-1" >
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
