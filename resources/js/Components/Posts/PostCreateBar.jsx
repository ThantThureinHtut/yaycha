import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/Components/ui/input-group";

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
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link, useForm, usePage } from "@inertiajs/react";
import {
    ArrowUpIcon,
    Search,
    FilePlus,
    Earth,
    Brain,
    X,
    TriangleAlert,
    BadgeCheck,
} from "lucide-react";
import { Avatar } from "@/Components/ui/avatar";
import { AvatarImage } from "@/Components/ui/avatar";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import NProgress from "nprogress"; // Import the library
import "nprogress/nprogress.css"; // Import the CSS
import axios from "axios";
import PostCreate from "./PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostCreateBar({ setPosts }) {
    const isMobile = useIsMobile();
    const { auth } = usePage().props;

    // This Come from Post Create , i want to send the data from child route to parent route
    const { isAi, isOpen, setOpen } = useTheme();

    return (
        <div className="flex items-center gap-2 lg:w-1/2 container mx-auto my-4 px-4 sm:px-0 -z-50">
            <Avatar className="">
                <AvatarImage src={auth.user?.avatar_url} />
            </Avatar>

            {/* This is Link For Modile */}
            <Link
                href={isMobile ? route("post.dashboard") : "/"}
                className={isMobile ? "block w-full" : "hidden"}
            >
                <InputGroup className={` ${isMobile && " pointer-events-none"} `}>
                    <InputGroupInput placeholder="What's on your mind?..."  />
                </InputGroup>
            </Link>

            {/* Desktop version Create post */}
            <div className="hidden md:block w-full">
                <Dialog
                    open={isOpen}
                    // This Trigger the open and close boolean value , true , false
                    // Open -> true , Close -> false
                    onOpenChange={(event) => {
                        if (event) {
                            setOpen(true);
                        } else {
                            setOpen(false);
                        }
                    }}
                >
                    <DialogTrigger asChild>
                        <div className="flex items-center gap-2">
                            <InputGroup className="">
                                <InputGroupInput placeholder="What's on your mind?..." />
                            </InputGroup>
                            <FilePlus className="bg-primary w-10 h-10 p-2 rounded-md" />
                        </div>
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
                        <DialogHeader className="flex justify-center items-center text-xl">
                            <DialogTitle className="mb-2">
                                Create Post
                            </DialogTitle>
                            <DialogDescription></DialogDescription>
                            <Separator />
                        </DialogHeader>
                        {/* This is the Post Create Box Element and Ai Fun work here */}

                        {/* setPosts is come from Home page to make the Optimistic UI Update */}
                        <PostCreate setPosts={setPosts} />
                    </DialogContent>
                </Dialog>
            </div>

            {/* This is Link For Desktop */}
            <Link
                href={isMobile ? route("post.dashboard") : "/"}
                className={isMobile ? "block" : "hidden"}
            >
                {" "}
                <FilePlus className="bg-primary w-10 h-10 p-2 rounded-md" />{" "}
            </Link>
        </div>
    );
}
