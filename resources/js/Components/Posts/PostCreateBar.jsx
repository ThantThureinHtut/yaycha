import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
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
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
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
export default function PostCreateBar() {
    const [isMobile, setMobile] = useState(false);
    const { auth } = usePage().props;

    // This Come from Post Create , i want to send the data from child route to parent route
    const { isAi, isOpen, setOpen } = useTheme();

    // When user is mounted , check the screen window size.
    // if it is mobile size like < 768 , it return true, > 768 -> false
    // can always trigger the window resize with addEventListener('resize')
    useEffect(() => {
        const checkSize = () => {
            setMobile(window.innerWidth < 768);
        };
        checkSize();

        window.addEventListener("resize", checkSize);

        // need to run  when components is unmounted , it will clear your effect.
        // to optain the preformace
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
        <div className="flex items-center gap-2 lg:w-1/2 container mx-auto my-4 px-4 sm:px-0">
            <Avatar>
                <AvatarImage src={auth.user?.avatar_url} />
            </Avatar>

            {/* This is Link For Modile */}
            <Link
                href={isMobile ? route("post.dashboard") : "/"}
                className={isMobile ? "block w-full" : "hidden"}
            >
                <InputGroup>
                    <InputGroupInput placeholder="What's on your mind?..." />
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
                            <InputGroup>
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
                        <PostCreate />
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
