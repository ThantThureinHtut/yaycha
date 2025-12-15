import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Rabbit } from "lucide-react";
import OAuthButtons from "@/Components/OAuthButtons";
export default function Login() {
    const { errors: pageErrors } = usePage().props;
    const { data, setData, reset, post, errors } = useForm({
        email: "",
        password: "",
    });
    const loginSubmit = () => {
        post("/login", {
            onSuccess: () => reset(),
        });
    };
    // Add the '?' before the dot
    const emailError = errors.email || pageErrors?.email;
    return (
        <AuthLayout>
            <TabsContent value="login">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <div className="flex items-center justify-center my-4 text-primary">
                            <Rabbit size={50} />
                        </div>

                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {emailError && (
                                        <Alert variant="destructive">
                                            <div className="flex items-center gap-2">
                                                <AlertCircleIcon size={18} />
                                                <AlertTitle className="m-0 text-sm">
                                                    {emailError}
                                                </AlertTitle>
                                            </div>
                                        </Alert>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
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
                                    {errors.password && (
                                        <Alert variant="destructive">
                                            <div className="flex items-center gap-2">
                                                <AlertCircleIcon size={18} />
                                                <AlertTitle className="m-0 text-sm">
                                                    {errors.password}
                                                </AlertTitle>
                                            </div>
                                        </Alert>
                                    )}
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button
                            type="submit"
                            onClick={loginSubmit}
                            className="w-full"
                        >
                            Login
                        </Button>
                        <OAuthButtons />
                    </CardFooter>
                </Card>
            </TabsContent>
        </AuthLayout>
    );
}
