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
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer";
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
import {
    Edit,
    Heart,
    MoreHorizontal,
    Trash,
    UserRoundCheck,
    UserRoundPlus,
} from "lucide-react";
import { router, usePage } from "@inertiajs/react";
import PostCreate from "./PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
export default function PostUpdate({
    post,
    likeSubmitHandler = null,
    isPressed = null,
    setPost = null,
}) {
    const { auth } = usePage().props;
    const { isAi } = useTheme();
    const [isUpdateOpen, setUpdateOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    // against the post user id with login user followings id  to check user is already follow or not
    // if the user is already in our login user followings , you can unfollow
    const isFollow = auth.user.followings.some(
        (follow) => follow.id === post.user.id
    );

    // Chack the Mobile screen size or not
    const isMobile = useIsMobile();

    // Post Delte Function
    const postDeleteHandler = () => {
        router.post(
            route("post.delete"),
            {
                post_id: post.id,
            },
            {
                // This Two make don't go restart the page and after you delete the post , don't go up and stay the same position before you delete
                preserveScroll: true,
                preserveState: true,
            }
        );
    };



    // Follow Submit Function
    const followHandler = () => {
        router.post(
            route("account.follow.store", post.user.id),
            {},
            { preserveScroll: true, preserveState: true }
        );
    };
    return (
        <span className="cursor-pointer">
            {isMobile ? (
                <div>
                    <div>
                        <Drawer
                            open={isDrawerOpen}
                            onOpenChange={setDrawerOpen}
                        >
                            <DrawerTrigger className="p-2">
                                <MoreHorizontal />
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader className="hidden">
                                    <DrawerTitle></DrawerTitle>
                                    <DrawerDescription></DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <div>
                                            {/* Like Post */}
                                            <div
                                                className="w-full"
                                                onClick={likeSubmitHandler}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    className="flex justify-start items-center w-full"
                                                >
                                                    <Heart
                                                        className={
                                                            isPressed &&
                                                            "fill-red-500 stroke-red-500"
                                                        }
                                                    />
                                                    {isPressed
                                                        ? "Unliked the post"
                                                        : "Liked the post"}
                                                </Button>
                                            </div>

                                            {/* Follow  */}
                                            {post.user_id !== auth.user.id && (
                                                <div onClick={followHandler}>
                                                    {isFollow ? (
                                                        <Button
                                                            variant="ghost"
                                                            className="flex justify-start items-center w-full"
                                                        >
                                                            <UserRoundCheck />
                                                            Unfollowd user
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="ghost"
                                                            className="flex justify-start items-center"
                                                        >
                                                            <UserRoundPlus />
                                                            Follow user
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </DrawerClose>


                                    {post.user_id === auth.user.id && (
                                        <div className="">
                                             <Separator />
                                             {/* Edit the Post */}
                                            <div className="flex justify-start items-center">
                                                <Button
                                                    variant="ghost"
                                                    className="w-full"
                                                    asChild
                                                >
                                                    <div>
                                                        <Dialog
                                                            open={isUpdateOpen}
                                                            onOpenChange={
                                                                setUpdateOpen
                                                            }
                                                        >
                                                            <DialogTrigger className="text-sm w-full text-start rounded flex justify-start gap-2 items-center m-0 py-4">
                                                                <Edit />
                                                                Edit
                                                            </DialogTrigger>
                                                            <DialogContent
                                                                className="!max-w-none !w-screen !h-screen !rounded-none !border-none !p-0 flex flex-col bg-background"
                                                                // 1. Prevent click the black space to exit
                                                                onInteractOutside={(
                                                                    e
                                                                ) => {
                                                                    if (isAi) {
                                                                        e.preventDefault();
                                                                    }
                                                                }}
                                                                // 2. Prevent closing when pressing ESC key
                                                                onEscapeKeyDown={(
                                                                    e
                                                                ) => {
                                                                    if (isAi) {
                                                                        e.preventDefault();
                                                                    }
                                                                }}
                                                            >
                                                                <DialogHeader className="hidden">
                                                                    <DialogTitle>
                                                                        Edit
                                                                        your
                                                                        post
                                                                    </DialogTitle>
                                                                    <DialogDescription></DialogDescription>
                                                                </DialogHeader>
                                                                <div className="flex justify-center w-full h-full overflow-y-auto p-4">
                                                                    <PostCreate
                                                                        action="Update"
                                                                        postData={
                                                                            post
                                                                        }
                                                                        setPosts={
                                                                            setPost
                                                                        }
                                                                        setUpdateOpen={
                                                                            setUpdateOpen
                                                                        }
                                                                        setDrawerOpen={
                                                                            setDrawerOpen
                                                                        }
                                                                    />
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                </Button>
                                            </div>

                                               {/* Delete Post */}
                                            <div className="flex justify-start items-center">
                                                <Button
                                                    variant="ghost"
                                                    className="w-full"
                                                    asChild
                                                >
                                                    <div>
                                                        <AlertDialog>
                                                            <AlertDialogTrigger className="text-sm w-full text-start rounded flex justify-start gap-2 items-center">
                                                                <Trash />
                                                                Delete post
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle className="text-red-500">
                                                                        Are you
                                                                        absolutely
                                                                        sure?
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        This
                                                                        action
                                                                        cannot
                                                                        be
                                                                        undone.
                                                                        This
                                                                        will
                                                                        permanently
                                                                        delete
                                                                        your
                                                                        account
                                                                        and
                                                                        remove
                                                                        your
                                                                        data
                                                                        from our
                                                                        servers.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>
                                                                        Cancel
                                                                    </AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={
                                                                            postDeleteHandler
                                                                        }
                                                                        className="bg-red-400/20 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                                                                    >
                                                                        Delete
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger className="p-2">
                        {" "}
                        <MoreHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={likeSubmitHandler}>
                            <Heart
                                className={
                                    isPressed && "fill-red-500 stroke-red-500"
                                }
                            />
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
                                                    This action cannot be
                                                    undone. This will
                                                    permanently delete your
                                                    account and remove your data
                                                    from our servers.
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
                                <div>
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
                                        <DialogContent
                                            // 1. Prevent click the black space to exit
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
                                                    setUpdateOpen={
                                                        setUpdateOpen
                                                    }
                                                />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        )}

                        {post.user.id !== auth.user.id && (
                            <DropdownMenuItem onClick={followHandler}>
                                {isFollow ? (
                                    <div className="flex justify-start items-center gap-1">
                                        <UserRoundCheck size={20} />
                                        Unfollowd user
                                    </div>
                                ) : (
                                    <div className="flex justify-start items-center gap-1">
                                        <UserRoundPlus size={20} />
                                        Follow user
                                    </div>
                                )}
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </span>
    );
}
