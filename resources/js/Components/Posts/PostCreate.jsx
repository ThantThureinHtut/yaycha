import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/Components/ui/input-group";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
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
    AlertCircleIcon,
    ArrowLeft,
} from "lucide-react";
import { Avatar } from "@/Components/ui/avatar";
import { AvatarImage } from "@/Components/ui/avatar";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
// Import the CSS
import axios from "axios";
import { useTheme } from "@/src/Context/ThemeContext";
import useAiGengerateTitle from "../Hooks/useAiGengerateTitle"; // this function does the Ai Title Generate Process
export default function PostCreate({ setPosts = null  }) {
    const { auth } = usePage().props;
    const { setAi, setOpen } = useTheme();

    const [isMobile, setMobile] = useState(false);
    const blueMarkCheck = auth.user?.bluemark_boolean === true;
    const [isAiErrorMessage, setAiErrorMessage] = useState("");
    const {
        data,
        setData,
        errors,
        setError,
        post,
        processing,
        isPending,
        progress,
        reset,
    } = useForm({ title: "", body: "" });

    //This is use for resize and depend on the page size
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

    // This is come From Hooks Folder
    const aiMutation = useAiGengerateTitle(
        setAi,
        setAiErrorMessage,
        setData,
        setError
    );
    // Fetch the Ai Generate Title from the backend
    // Create the Post Submit
    const createPostHandler = (e) => {
        e.preventDefault();
        if(!isMobile){
             const fakeData = {
                    id: Date.now(), // this fake id for a while until real data is reach from databse
                    title: data.title,
                    description: data.body,
                    user_id: auth.user.id,
                    created_at: new Date().toISOString(), // this fake id for a while until real data is reach from databse
                    user: {
                        id: auth.user.id,
                        username: auth.user.username,
                        email: auth.user.email,
                        bluemark: auth.user.bluemark,
                        avatar_url: auth.user.avatar_url,
                    },
                    likes: [],
                    comments: [],
                    views: [],
                    likes_count_formatted: "0", // Blog.jsx needs this!
                    views_count_formatted: "0", // Blog.jsx needs this!
                    comments_count_formatted: "0",
                }

         setPosts((prevPost) =>  [
                fakeData,
                ...prevPost,
            ]
        );
        }
        post(route("post.create"), {
            onSuccess: () => {
                reset();
                // ONLY close the modal if the post was successful
                if (!isMobile) {
                    setOpen(false);
                }
                // Optional: Show a success toast here if you want
                toast("Post created successfully!");
            },
        });
    };

    return (
        <form
            onSubmit={createPostHandler}
            className={`sm:max-w-xl w-full flex items-center justify-center gap-2 ${
                aiMutation.isPending ? "[&>button]:hidden cursor-wait" : ""
            }`}
        >
            <div className="grid flex-1 gap-2">
                {/* Post User Image and Name */}
                <div>
                    <Link href="/home" className="md:hidden">
                        <ArrowLeft />
                    </Link>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center gap-3 mb-2">
                        <Avatar>
                            <AvatarImage src={auth.user?.avatar_url} />
                        </Avatar>
                        <div>
                            <h1 className=" font-bold">
                                {auth.user?.username}
                            </h1>
                            <Badge className="gap-1 mt-1">
                                <Earth size={15} />
                                <span>public</span>
                            </Badge>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        disabled={
                            aiMutation.isPending ||
                            (data.body && data.title ? false : true)
                        }
                        className={isMobile ? "" : "hidden"}
                    >
                        Post
                    </Button>
                </div>

                {/* This Show the Error Message of Ai gen request */}
                <div className="text-red-500">{isAiErrorMessage}</div>

                {(!errors.title && !errors.body) ||
                    ((errors.title || errors.body) && (
                        <Alert variant="destructive">
                            <AlertCircleIcon />
                            <AlertTitle>Unable to process Data.</AlertTitle>
                            <AlertDescription>
                                <ul className="list-inside list-disc text-sm">
                                    <li
                                        className={errors.title ? "" : "hidden"}
                                    >
                                        {errors.title}
                                    </li>
                                    <li className={errors.body ? "" : "hidden"}>
                                        {errors.body}
                                    </li>
                                </ul>
                            </AlertDescription>
                        </Alert>
                    ))}

                <InputGroup>
                    <InputGroupInput
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        placeholder="Title"
                        disabled={aiMutation.isPending}
                    />

                    {/* This is check for bluemark
                        If user is don't have the bluemark , can't access to use the AI Gen
                        The user must have the bluemark to use it
                                    */}
                    {blueMarkCheck ? (
                        <InputGroupButton
                            className={aiMutation.isPending && " cursor-wait"}
                            onClick={() => aiMutation.mutate(data.body)}
                        >
                            {/* This is make Button Effect changin when i click the Ai to generate
                                                If AiMutation is Pending state It show the colorful AI Magic Button
                                                If not Show only AI Brain
                                            */}
                            {aiMutation.isPending ? (
                                <div
                                    className="
                                    font-extrabold
                                    text-transparent
                                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                                    animate-gradient
                                    drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]
                                                            "
                                >
                                    AI Magic ✨
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    {" "}
                                    AI <Brain />
                                </div>
                            )}
                        </InputGroupButton>
                    ) : (
                        <InputGroupButton asChild>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <div>
                                        <InputGroupButton>
                                            AI <Brain />
                                        </InputGroupButton>
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            <div className="flex items-center gap-3 text-blue-500">
                                                <BadgeCheck />
                                                <span>Warning</span>
                                            </div>
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="text-md">
                                            This AI feature is exclusive to
                                            BlueMark verified users
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="bg-blue-500 text-white hover:bg-blue-600">
                                            <Link href={route("account.bluemark.verified.dashboard" , {id: auth.user.id})}>verified now</Link>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </InputGroupButton>
                    )}
                </InputGroup>

                {/* Text Area */}
                <InputGroup className=" !border-none !shadow-none !ring-0 has-[textarea]:!ring-0 dark:!border-none dark:!ring-0 dark:!bg-transparent ">
                    <InputGroupTextarea
                        onChange={(e) => setData("body", e.target.value)}
                        name="textarea"
                        disabled={aiMutation.isPending}
                        placeholder={`What's on your mind, ${auth.user.name}`}
                    />
                </InputGroup>

                {/* Post Button  */}
                <Button
                    type="submit"
                    className={isMobile ? "hidden" : ""}
                    disabled={data.body && data.title ? false : true}
                >
                    Post
                </Button>
            </div>
        </form>
    );
}
