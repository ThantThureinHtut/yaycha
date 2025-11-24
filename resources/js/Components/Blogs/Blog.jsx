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

import { Badge } from "@/components/ui/badge";
import BlueMark from "../BlueMark";
import { Separator } from "../ui/separator";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import ExpandableText from "./ExpandableText";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export default function Blog({ post }) {
    console.log(post);

    const [isPressed, setPressed] = useState(false);
    const { auth } = usePage().props;
    const viewIn = useMutation({
        mutationFn: () => {
            axios.post(route("post.viewStore"), {
                post_id: post.id,
                user_id: auth.user.id,
            });
        },
        onMutate: () => {
            post.views_count += 1;
            post.views_count_formatted = formatNumber(post.views_count);
        },
    });

    const formatNumber = (number) => {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
        }).format(number);
    };
    const viewSumbitHandler = () => {
        viewIn.mutate();
    };
    return (
        <div className="container flex flex-col gap-8 mx-auto my-3  md:w-full lg:w-1/2  ">
            <Card className="rounded-none">
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="flex justify-between">
                        <span className="flex items-center gap-2">
                            written by{" "}
                            <b className=" text-blue-500">
                                @{post.user.username}
                            </b>
                            {post.bluemark === 1 && <BlueMark />}
                        </span>
                        <span className="flex items-center gap-2">
                            {post.views_count_formatted}
                            <Eye size={20} />
                        </span>
                    </CardDescription>
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
                                    <div onClick={() => setPressed(!isPressed)}>
                                        <Heart
                                            size={20}
                                            className={
                                                isPressed &&
                                                "fill-red-500 stroke-red-500"
                                            }
                                        />
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <span className="flex items-center gap-1 ">
                                        2k
                                        <Save size={20} />
                                    </span>
                                    <span className="flex items-center gap-1">
                                        {post.comments_count_formatted}
                                        <MessageSquare size={20} />
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </CardFooter>
            </Card>
        </div>
    );
}
