import Header from "@/Components/Header";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/Components/ui/input-group";
import { Separator } from "@/Components/ui/separator";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ArrowLeft, CheckCircle2Icon, OctagonAlert } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

export default function ProfileEdit() {
    const { auth } = usePage().props;
    const {
        data,
        setData,
        errors,
        post,
        recentlySuccessful,
        processing,
        isDirty,
    } = useForm({
        name: auth.user?.name,
        email: auth.user?.email,
        password: "",
        bio: auth.user?.bio
    });

    useEffect(() => {
        if (recentlySuccessful) {
            toast.success("Yaycha", {
                description: "Success! Your changes have been saved",
                variant: "success",
            });
        }
    }, [recentlySuccessful]);
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("profile.edit"));
    };
    const deleteHandler = (e) => {
        e.preventDefault();
        post(route("account.delete"));
    };

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Profile Edit Name and Email */}
            <form
                onSubmit={submitHandler}
                className="flex flex-col items-center justify-center overflow-auto my-4 "
            >
                <Card className="container rounded-none sm:rounded-lg">
                    <CardHeader className="gap-2">
                        <div>
                            <div className="mb-3">
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <Link
                                                href={route(
                                                    "account.dashboard"
                                                )}
                                            >
                                                Account
                                            </Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbPage>Edit</BreadcrumbPage>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </div>
                        <CardTitle>Profile Edit {errors.email}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                             <InputGroup>
                                <InputGroupInput
                                    value={data?.bio ?? ''}
                                    onChange={(e) =>
                                        setData("bio", e.target.value)
                                    }
                                />
                                <InputGroupAddon>Bio</InputGroupAddon>
                            </InputGroup>

                            <InputGroup>
                                <InputGroupInput
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputGroupAddon>Name</InputGroupAddon>
                            </InputGroup>

                            <InputGroup>
                                <InputGroupInput
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputGroupAddon>Email</InputGroupAddon>
                            </InputGroup>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={processing || !isDirty}>
                            update
                        </Button>
                    </CardFooter>
                </Card>
            </form>

            {/* Delete Account */}
            <form onSubmit={deleteHandler} className="container mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Alert variant="destructive" className="flex gap-3">
                                <div>
                                    <OctagonAlert />
                                </div>
                                <div>
                                    <AlertTitle>
                                        <span className="text-lg">
                                            Delete Account
                                        </span>
                                    </AlertTitle>
                                    <AlertDescription>
                                        <span className="text-sm">
                                            Are you sure you want to delete your
                                            account? Once your account is
                                            deleted, all of your resources and
                                            data will be permanently deleted.
                                            Please enter your password to
                                            confirm you would like to
                                            permanently delete your account.
                                        </span>
                                    </AlertDescription>
                                </div>
                            </Alert>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            {errors.password && (
                                <Alert variant="destructive">
                                    <AlertTitle>{errors.password}</AlertTitle>
                                </Alert>
                            )}
                            <InputGroup>
                                <InputGroupAddon>
                                    {auth.user.has_password
                                        ? "Enter your Current Password"
                                        : "Type 'DELETE ACCOUNT' to confirm "}
                                    <Separator
                                        orientation="vertical"
                                        className="h-5"
                                    />{" "}
                                </InputGroupAddon>
                                <InputGroupInput
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Enter"
                                />
                            </InputGroup>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <Button type="submit" variant="destructive">
                            Delete Account
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
