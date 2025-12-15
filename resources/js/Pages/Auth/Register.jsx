import AuthLayout from "@/Layouts/AuthLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rabbit } from "lucide-react";
import OAuthButtons from "@/Components/OAuthButtons";
export default function Register() {
    const { data, setData, reset, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const registerSubmit = () => {
        post("/register");
    };
    return (
        <AuthLayout>
            <TabsContent value="signup">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <div className="flex items-center justify-center my-4 text-primary">
                            <Rabbit size={50} />
                        </div>
                        <CardTitle>Signup your account</CardTitle>
                        <CardDescription>
                            Enter your Name , Email and Password
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="test"
                                        placeholder="Name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    {errors.name && (<Alert variant="destructive">
                                        <div className="flex items-center gap-2">
                                            <AlertCircleIcon size={18}/>
                                            <AlertTitle className="m-0 text-sm">
                                               {errors.name}
                                            </AlertTitle>
                                        </div>

                                    </Alert>)}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    {errors.email && (<Alert variant="destructive">
                                        <div className="flex items-center gap-2">
                                            <AlertCircleIcon size={18}/>
                                            <AlertTitle className="m-0 text-sm">
                                               {errors.email}
                                            </AlertTitle>
                                        </div>

                                    </Alert>)}
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your Password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    {errors.password && (<Alert variant="destructive">
                                        <div className="flex items-center gap-2">
                                            <AlertCircleIcon size={18}/>
                                            <AlertTitle className="m-0 text-sm">
                                               {errors.password}
                                            </AlertTitle>
                                        </div>

                                    </Alert>)}
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password_confirmation">
                                            Confirm Password
                                        </Label>
                                    </div>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button
                            type="submit"
                            onClick={registerSubmit}
                            className="w-full"
                        >
                            Create
                        </Button>

                      <OAuthButtons/>
                    </CardFooter>
                </Card>
            </TabsContent>
        </AuthLayout>
    );
}
