import Blog from "@/Components/Blogs/Blog";
import Header from "@/Components/Header";
import PostCreateBox from "@/Components/Posts/PostCreateBar";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

import { Separator } from "@/Components/ui/separator";
import { Link, usePage } from "@inertiajs/react";
import { ArrowLeft, Edit } from "lucide-react";

export default function AccountInformation() {
    const { auth } = usePage().props;
    return (
        <div className="container mx-auto">
            <div className="hidden sm:block">
                <Header />
            </div>
            <div>
                <div className="bg-secondary p-4 shadow-sm block sm:hidden">
                    <Link href="/home">
                        <ArrowLeft />
                    </Link>
                </div>

                <div>
                    <Card className="rounded-none sm:my-6 shadow-none border-none dark:bg-transparent">
                        <CardHeader>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between ">
                                <div className="flex flex-col  sm:flex-row sm:items-center gap-3 sm:gap-7">
                                    <Avatar className=" w-24 h-24">
                                        <AvatarImage
                                            src={auth.user?.avatar_url}
                                        />
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-xl sm:text-2xl">
                                            @{auth.user?.username}
                                        </CardTitle>
                                        <CardDescription className="text-sm sm:text-md">
                                            0 followers
                                        </CardDescription>
                                    </div>
                                </div>
                                <Link href={route("account.edit")}>
                                    <Button>
                                        <Edit />
                                        Edit profile
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <Separator className="mb-8" />
                        <CardContent>
                            <CardTitle>Your Posts</CardTitle>
                            <div className="rounded mt-4 mx-auto">
                                <PostCreateBox />
                            </div>

                            <div className="mt-6">
                                {/* <Blog /> */}
                            </div>
                        </CardContent>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
