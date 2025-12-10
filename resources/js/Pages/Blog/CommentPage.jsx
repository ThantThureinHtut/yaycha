import Comments from "@/Components/Blogs/Comments";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/Components/ui/input";
import { InputGroup, InputGroupInput } from "@/Components/ui/input-group";
import { Separator } from "@/Components/ui/separator";
import { Description } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import {
    ArrowLeft,
    Eye,
    ChevronLeft,
    Heart,
    MessageSquare,
    Send,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import addReplyToTree from "@/Components/Utils/addReplyToTree";
import usePostInteractions from "@/Components/Hooks/usePostInteractions";
import usePostEcho from "@/Components/Hooks/usePostEcho";

export default function CommentPage({ post: initialPost, comments }) {
    const { auth } = usePage().props;
    const [ post, setPost] = useState(initialPost)
    const [isPressed, setPressed] = useState(
        post.likes.some(
            (like) => like.post_id === post.id && like.like_id === auth.user.id
        )
    );
    const { viewIn, likeIn } = usePostInteractions(
        post,
        auth,
        isPressed,
        setPressed
    );
    const [localComments, setLocalComments] = useState(comments);
    const [reply, setReply] = useState({
        post_id: post.id,
        parent_id: null,
        replyName: null,
        comments: null,
    });
    const [comment, setComment] = useState("");

    useEffect(() => {
        setLocalComments(comments);
    }, [comments]);

    const repyIdSubmitHandler = (id) => {
        setReply(id);
    };

    // Post Interaction
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

    const commentSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            const temp_reply = {
                id: Math.random(), // Temporary ID (so React keys don't break)
                post_id: reply.post_id,
                parent_id: reply.parent_id, // Important: keep track of who we are replying to
                comment: comment,
                parent: reply.comments && {
                    user: {
                        id: reply.comments.id,
                        username: reply.comments.user.username,
                    },
                },
                created_at: new Date().toISOString(), // Current time
                user: {
                    username: auth.user.username,
                    avatar_url: auth.user.avatar_url,
                },
                replies: [],
            };

            if (reply.parent_id) {
                setLocalComments((prevComment) => {
                    return addReplyToTree(
                        prevComment,
                        reply.parent_id,
                        temp_reply
                    );
                });
            } else {
                setLocalComments([...localComments, temp_reply]);
            }

            axios.post(
                route("post.comments.store"),
                {
                    post_id: reply.post_id,
                    parent_id: reply.parent_id,
                    comment: comment,
                },
                {
                    preserveScroll: true,
                }
            );

            // Reset
            setReply({
                post_id: post.id,
                parent_id: null,
                replyName: null,
            });
            setComment("");
        }
    };

    usePostEcho(setPost)
    return (
        <div className="container mx-auto md:w-full lg:w-1/2 px-3 relative">
            <div className="sticky top-0 bg-background rounded-b z-50 ">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2.5">
                        <Link href="/home" className="text-primary">
                            <ChevronLeft size={30} />
                        </Link>
                        <div>
                            <Avatar>
                                <AvatarImage src={post.user.avatar_url} />
                            </Avatar>
                        </div>
                        <div>
                            <h1>{post.title}</h1>
                            <p className="text-gray-500">
                                written by{" "}
                                <b className="text-blue-500">
                                    {post.user.username}
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <span>{post.views_count_formatted}</span>
                        <Eye />
                    </div>
                </div>
            </div>

            <div className="px-1  text-justify" onClick={viewSumbitHandler}>
                {post.description}
            </div>

            {/* Like Seaction */}
            <div className="flex justify-between m-2">
                <div
                    className="flex items-center gap-1 text-gray-500"
                    onClick={likeSubmitHandler}
                >
                    <span>{post.likes_count_formatted}</span>{" "}
                    <Heart
                        size={20}
                        className={isPressed && "fill-red-500 stroke-red-500"}
                    />
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <span>{post.comments_count_formatted}</span>{" "}
                    <MessageSquare size={20} />
                </div>
            </div>

            {/* Comments Section */}
            <div className="mt-3 z-10">
                <h1>comments</h1>
                <div className="flex flex-col gap-3">
                    {localComments?.map((comment) => (
                        <Comments
                            key={comment.id}
                            comment={comment}
                            repyIdSubmitHandler={repyIdSubmitHandler}
                            depth={0}
                        />
                    ))}
                </div>
            </div>

            {/* Comment Write Section */}
            <div className="sticky bottom-0 bg-background p-3">
                {reply.replyName && (
                    <Badge className="my-2">
                        <div className="flex items-center justify-center gap-1">
                            <X
                                size={15}
                                onClick={() =>
                                    setReply({
                                        post_id: 1,
                                        parent_id: null,
                                        replyName: null,
                                    })
                                }
                            />
                            <span>{reply.replyName}</span>
                        </div>
                    </Badge>
                )}
                <form
                    onSubmit={commentSubmit}
                    className="flex items-center justify-center gap-2"
                >
                    <InputGroup>
                        <InputGroupInput
                            placeholder="Comments"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </InputGroup>
                    <Button
                        disabled={comment ? false : true}
                        type="submit"
                        className="flex items-center justify-center"
                    >
                        <Send size={20} />
                    </Button>
                </form>
            </div>
        </div>
    );
}
