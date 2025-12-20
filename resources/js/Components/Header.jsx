import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from "@/Components/ui/drawer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import {
    Rabbit,
    Meh,
    UserPen,
    UserCog,
    Repeat2,
    ThumbsUp,
    X,
    Eclipse,
    LogOut,
    Search,
    ShieldUser,
    Verified,
} from "lucide-react";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Head } from "@inertiajs/react";
import { Card, CardHeader } from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Switch } from "@/Components/ui/switch";
import { Separator } from "@/Components/ui/separator";
import { useEffect, useState } from "react";
import { useTheme } from "@/src/Context/ThemeContext";
import SearchBox from "@/Components/SearchBox";
export default function Header() {
    const { auth } = usePage().props;
    const { theme, setTheme } = useTheme();
    return (
        <div className="container mx-auto ">
            <ul className="flex items-center justify-between shadow-sm dark:shadow-md py-3 px-6 rounded-sm  bg-background bg z-50">
                <li>
                    <Link href="/home" >
                        <Rabbit size={35} color="#facc13" />
                    </Link>
                </li>
                <li className="hidden md:block sm:w-1/2">
                    <div className="flex justify-center items-center ">
                        <SearchBox className="w-full" />
                    </div>
                </li>
                <li>
                    <div className="flex items-center gap-6">
                        <Link href="/search/" className="md:hidden">
                            <Search />
                        </Link>
                        {/* Clicked to show the drawer */}
                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <Avatar>
                                    <AvatarImage
                                        src={auth.user?.avatar_url}
                                        className="w-10 h-10"
                                    />
                                </Avatar>
                            </DrawerTrigger>

                            {/* Show up the Drawer Container */}
                            <DrawerContent className="right-0 left-auto w-full sm:w-80 rounded-none h-full min-h-screen overflow-scroll overflow-x-hidden">
                                <DrawerHeader>
                                    {/* Drawer Close Button */}
                                    <DrawerClose asChild>
                                        <div className="flex">
                                            <Button variant="secondary">
                                                <X color="#facc13" />
                                            </Button>
                                        </div>
                                    </DrawerClose>

                                    {/* Profile Avatar And Name */}
                                    <DrawerTitle>
                                        <div className="flex flex-col items-center justify-center gap-5">
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage
                                                    src={auth.user?.avatar_url}
                                                />
                                            </Avatar>
                                            <p>{auth.user?.username}</p>
                                        </div>
                                    </DrawerTitle>
                                    <DrawerDescription className="flex items-center justify-center">
                                        {auth.user?.bio ?? "Bio"}
                                    </DrawerDescription>
                                </DrawerHeader>
                                <Separator className="my-2 " />

                                {/* Some user realated function button */}
                                <div className="p-4">
                                    <ul className="flex flex-col gap-5 sm:gap-4 items-center sm:items-start">
                                        <li className="w-full">
                                            <Accordion
                                                type="single"
                                                collapsible
                                            >
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger>
                                                        <div className=" flex items-center justify-center sm:justify-start gap-2 font-bold">
                                                            <Eclipse />
                                                            <span className=" font-bold">
                                                                Mode
                                                            </span>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div>
                                                            <RadioGroup
                                                                className="flex h-4 items-center space-x-2 text-sm"
                                                                value={theme}
                                                                onValueChange={
                                                                    setTheme
                                                                }
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <Label htmlFor="dark">
                                                                        Dark
                                                                    </Label>
                                                                    <RadioGroupItem
                                                                        value="dark"
                                                                        id="dark"
                                                                    />
                                                                </div>
                                                                <Separator orientation="vertical" />
                                                                <div className="flex items-center gap-2">
                                                                    <Label htmlFor="light">
                                                                        Light
                                                                    </Label>
                                                                    <RadioGroupItem
                                                                        value="light"
                                                                        id="light"
                                                                    />
                                                                </div>
                                                                <Separator orientation="vertical" />
                                                                <div className="flex items-center gap-2">
                                                                    <Label htmlFor="system">
                                                                        System
                                                                    </Label>
                                                                    <RadioGroupItem
                                                                        value="system"
                                                                        id="system"
                                                                    />
                                                                </div>
                                                            </RadioGroup>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                href={route(
                                                    "account.dashboard"
                                                )}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded "
                                            >
                                                <UserCog />
                                                <p className="text-lg sm:text-sm">
                                                    Account information
                                                </p>
                                            </Link>

                                            <Separator />
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                href={route(
                                                    "acccount.liked.posts.show"
                                                )}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                                            >
                                                <ThumbsUp />
                                                <p className="text-lg sm:text-sm">
                                                    Liked Posts
                                                </p>
                                            </Link>
                                        </li>

                                          <li className="w-full">
                                            <Link
                                                href={route(
                                                    "account.bluemark.verified.dashboard"
                                                , {id: auth.user.id})}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                                            >
                                                <Verified />
                                                <p className="text-lg sm:text-sm">
                                                    Bluemark Verification
                                                </p>
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            {auth.user.role === ("superadmin" || "admin")  && (
                                                    <Link
                                                        href={route(
                                                            "admin.dashboard"
                                                        )}
                                                        className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                                                    >
                                                        <ShieldUser />
                                                        <p className="text-lg sm:text-sm">
                                                            Admin Dashboard
                                                        </p>
                                                    </Link>
                                                )}
                                        </li>
                                    </ul>
                                </div>

                                <DrawerFooter>
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="flex items-center justify-center gap-2 bg-primary p-2 rounded-sm"
                                    >
                                        <span>Logout</span> <LogOut size={20} />
                                    </Link>

                                    <p>@copyright by yaycha</p>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </li>
            </ul>
        </div>
    );
}
