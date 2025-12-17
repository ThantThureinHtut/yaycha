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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { InputGroup } from "../ui/input-group";
import { MoreHorizontal } from "lucide-react";
import { router, usePage } from "@inertiajs/react";
import PostCreate from "./PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PostUpdate({
    post,
    likeSubmitHandler,
    isPressed,
    setPost,
}) {
    const { auth } = usePage().props;
    const { isAi, isUpdateOpen, setUpdateOpen } = useTheme();

    // against the post user id with login user followings id  to check user is already follow or not
    // if the user is already in our login user followings , you can unfollow
    const [isFollow , setIsFollow] = useState(() => {
        return auth.user.followings.some((follow) => follow.id === post.user.id);
    });

    // Chack the Mobile screen size or not
    const isMobile = useIsMobile();

    // Post Delte Function
    const postDeleteHandler = () => {
        router.post(route("post.delete"), {
            post_id: post.id,
        });
    };

    // Post Edit Function
    const postEditHandler = () => {
        if (isMobile) {
            router.get(route("post.edit.show", { id: post.id }));
        }
    };

    // Follow Submit Function
    const followHandler = () => {
        setIsFollow((prev) => !prev);
        axios.post(route("account.follow.store" , post.user.id))
    }
    return (
        <span className="cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger className="p-2">
                    {" "}
                    <MoreHorizontal />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={likeSubmitHandler}>
                        {isPressed ? "Unliked the post" : "Liked the post"}
                    </DropdownMenuItem>
                    {post.user_id === auth.user.id && (
                        <div>
                            <div>
                                <AlertDialog>
                                    <AlertDialogTrigger className="text-sm p-1.5 hover:bg-stone-600/5 w-full text-start rounded">
                                        Delete post
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-red-500">
                                                Are you absolutely sure?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone.
                                                This will permanently delete
                                                your account and remove your
                                                data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={postDeleteHandler}
                                                className="bg-red-400/20 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                                            >
                                                Delete
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                            <div onClick={postEditHandler}>
                                <div className="text-sm p-1.5 hover:bg-stone-600/5 w-full text-start rounded md:hidden">
                                    Edit post
                                </div>
                                <Dialog
                                    open={isUpdateOpen}
                                    // This Trigger the open and close boolean value , true , false
                                    // Open -> true , Close -> false
                                    onOpenChange={(event) => {
                                        if (event) {
                                            setUpdateOpen(true);
                                        } else {
                                            setUpdateOpen(false);
                                        }
                                    }}
                                >
                                    <DialogTrigger className="text-sm p-1.5 hover:bg-stone-600/5 w-full text-start rounded hidden md:block">
                                        Edit post
                                    </DialogTrigger>
                                    <DialogContent // 1. Prevent click the black space to exit
                                        onInteractOutside={(e) => {
                                            if (isAi) {
                                                e.preventDefault();
                                            }
                                        }}
                                        // 2. Prevent closing when pressing ESC key
                                        onEscapeKeyDown={(e) => {
                                            if (isAi) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        <DialogHeader>
                                            <DialogTitle>
                                                Edit your post
                                            </DialogTitle>
                                            <DialogDescription></DialogDescription>
                                        </DialogHeader>
                                        <div>
                                            <PostCreate
                                                action="Update"
                                                postData={post}
                                                setPosts={setPost}
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    )}

                  {post.user.id !== auth.user.id && (
                      <DropdownMenuItem onClick={followHandler}>{isFollow ? "Unfollow user" : "Follow user" }</DropdownMenuItem>
                  ) }
                </DropdownMenuContent>
            </DropdownMenu>
        </span>
    );
}
