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
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function Blog({ post, user }) {
    const { auth } = usePage().props;
    const [isPressed, setPressed] = useState(false);

    const viewIn = useMutation({
        mutationFn: () => {
            axios.post(route("post.viewStore"), {
                user_id: auth.user.id,
                post_id: post.id,
            });
        },
        onMutate: async () => {
            post.views_count += 1;
            post.views_count_formatted = formatNumber(post.views_count);
            // This need !! cuz in viewSumbitHandller , checking the view.user_id === auth.user.id
            // but when you click again and again before Echo is finish. So the views value is still null ,The Count is increasing
            // so need to put views value for perevent that action but that data is temp , not autaul data to sign in
            // so in post data , in user one {post_id: 1 , user_id: 2} but in user two two which come from database value
            // but when you refresh your page it become autaul data which is come from database;

            // Example ->
            //  user click -> increase view Count(virtual data) (1)
            //  user click again before loading is finish -> increase (1)->(2)->(3)
            //  when loading is finish , view count become (1) in your userinterface (which is bed UX)
            //  so add the temporary data to prevent that kind of thing which i related my if check

            // Remining This prevent the increaing the viewcount for temporary
            post.views = [
                ...(post.views || []),
                { post_id: post.id, user_id: auth.user.id },
            ];
        },
    });

    const formatNumber = (number) => {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
        }).format(number);
    };

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

    return (
        <div className="container flex flex-col gap-8 mx-auto my-3  md:w-full lg:w-1/2  ">
            <Card className="rounded-none">
                <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div>
                            <Link
                                href={route("account.show", {
                                    id: post.user.id,
                                })}
                            >
                                <Avatar>
                                    <AvatarImage src={post.user?.avatar_url} />
                                </Avatar>
                            </Link>
                        </div>
                        <div>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription className="flex justify-between">
                                <span className="flex items-center gap-2">
                                    written by{" "}
                                    <b className="flex items-center gap-2">
                                        <span className="text-blue-500">
                                            @{post.user.username}
                                        </span>
                                    </b>
                                    {post.bluemark === 1 && <BlueMark />}
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
