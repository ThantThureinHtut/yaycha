import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/Components/ui/input-group";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Hourglass, UserCheck, Verified } from "lucide-react";
import { useState } from "react";

export default function BluemarkVerified() {
    const { auth } = usePage().props;
    const [governmentPreview, setgovernmentPreview] = useState();
    const [errorGovernmentPreview, seterrorGovernmentPreview] = useState("");
    const [errorSelfiePreview, seterrorSelfiePreview] = useState("");
    const [errorName, setErrorName] = useState("");
    const [selfiePreview, setselfiePreview] = useState();
    const { data, setData, post, processing, errors } = useForm({
        username: auth.user.username,
        user_id: auth.user.id,
        email: auth.user.email,
        date_of_birth: "",
        legal_name: "",
        governmentImage: null,
        selfieImage: null,
    });


    const handleFileChange = (e, fileName, setPreviewFun, setError) => {
        const file = e.target.files[0];
        if (file) {
            const fileSize = file.size;
            const maxSizeBytes = 1 * 1024 * 1024;
            if (fileSize > maxSizeBytes) {
                setError("File Size can't over 1mb");
            } else {
                setError("");
                seterrorGovernmentPreview("");
                seterrorSelfiePreview("");
                setData(fileName, file);
                setPreviewFun(URL.createObjectURL(file));
            }
        } else {
            setError("");
        }
    };
    const nameValidFunction = (data) => {
        const hasNumber = /[0-9]/.test(data);
        const hasSymbol = /[^\w\s]/.test(data);

        if (hasNumber || hasSymbol) {
            setErrorName("Name can't have the [0-9] , @!#$%");
        } else {
            setErrorName();
        }
        setData("legal_name", data);
    };
    const verifiedSubmitHandler = (e) => {
        e.preventDefault();
        if (!errorGovernmentPreview && !errorSelfiePreview && !errorName) {
            post(route("account.bluemark.verified.store"));
        }
    };
    return (
        <div>
            {auth.user.verified_status === "unverified" && (
                <form
                    onSubmit={verifiedSubmitHandler}
                    className="container mx-auto w-full md:w-1/2 flex justify-center items-center min-h-screen "
                    encType="multipart/form-data"
                >
                    <Card>
                        <CardHeader className=" text-blue-500 text-xl font-bold">
                            <div className="flex items-center ju gap-1">
                                <Verified />
                                <span>Verified Account</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2">
                                <div className="text-red-500 text-sm">
                                    <div>{errorName}</div>
                                </div>
                                <InputGroup>
                                    <InputGroupAddon>
                                        Full Legal Name:
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        placeholder="Enter your full legal name: "
                                        required
                                        onChange={(e) =>
                                            nameValidFunction(e.target.value)
                                        }
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon>
                                        Date of Birth
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        type="date"
                                        required
                                        placeholder="Enter your full legal name: "
                                        onChange={(e) =>
                                            setData(
                                                "date_of_birth",
                                                e.target.value
                                            )
                                        }
                                    />
                                </InputGroup>

                                {/* Government Input And Preview */}
                                <div className="flex flex-col gap-2 overflow-hidden">
                                    <div className="text-red-500 text-sm">
                                        <div>{errorGovernmentPreview}</div>
                                    </div>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            Government-Issued ID
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            type="file"
                                            required
                                            onChange={(e) =>
                                                handleFileChange(
                                                    e,
                                                    "governmentImage",
                                                    setgovernmentPreview,
                                                    seterrorGovernmentPreview
                                                )
                                            }
                                        />
                                    </InputGroup>

                                    {governmentPreview && (
                                        <div className="flex justify-center items-center border rounded-md">
                                            <img
                                                src={governmentPreview}
                                                className=" size-1/2 "
                                                alt="govermant_image"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Selfie Input And Preview */}
                                <div className="flex flex-col gap-2 overflow-hidden">
                                    <div className="text-red-500 text-sm">
                                        <div>{errorSelfiePreview}</div>
                                    </div>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            Selfie with ID
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            type="file"
                                            required
                                            onChange={(e) =>
                                                handleFileChange(
                                                    e,
                                                    "selfieImage",
                                                    setselfiePreview,
                                                    seterrorSelfiePreview
                                                )
                                            }
                                        />
                                    </InputGroup>

                                    {selfiePreview && (
                                        <div className="flex justify-center items-center border rounded-md">
                                            <img
                                                src={selfiePreview}
                                                className=" size-1/2 "
                                                alt="selfie_image"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                type="submit"
                                className=" bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-700 w-full"
                            >
                                verified
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            )}
            {auth.user.verified_status === "pending" && (
                <div className="container mx-auto w-full md:w-1/2 flex items-center justify-center min-h-screen">
                    <Card className="flex flex-col items-baseline rounded-none sm:rounded-lg">
                        <CardHeader>
                            <div className="flex items-center gap-3 ">
                                <div className="bg-orange-400 p-2 rounded-full animate-spin">
                                    <Hourglass className="text-white" />
                                </div>
                                <h1 className="text-lg font-bold text-orange-400">
                                    Your verification is still pending
                                </h1>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <span className=" text-justify">
                                    Your BlueMark verification request has been
                                    submitted.Please wait while an admin reviews
                                    and approves it. This may take some time.
                                </span>
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link href="/home">
                                <Button variant="outline">Go back</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            )}
            {auth.user.verified_status === "success" && (
                <div className="container mx-auto w-full md:w-1/2 flex items-center justify-center min-h-screen">
                    <Card className="flex flex-col  rounded-none sm:rounded-lg">
                        <CardHeader>
                            <div className="flex flex-col items-center gap-4">
                                <span className="relative flex size-12 items-center justify-center">
                                    <span className="absolute inline-flex size-10 animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex items-center justify-center size-12 p-2 rounded-full bg-green-500 text-white">
                                        <UserCheck />
                                    </span>
                                </span>
                                <h1 className="text-green-500 text-2xl font-bold">
                                    Verification is successfully
                                </h1>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <div className="p-4 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800">
                                    <h3 className="font-semibold mb-1">
                                        ⚠️ Important Notice
                                    </h3>
                                    <p>
                                        To maintain a respectful and safe
                                        community, all Bluemark users must
                                        follow our content guidelines. Posting{" "}
                                        <strong>
                                            inappropriate, sexual, or offensive
                                            content
                                        </strong>{" "}
                                        is strictly prohibited.
                                    </p>
                                    <p className="mt-2">
                                        If you violate these rules:
                                    </p>
                                    <ul className="list-disc list-inside mt-1">
                                        <li>
                                            Your{" "}
                                            <strong>Bluemark status</strong> may
                                            be removed
                                        </li>
                                        <li>
                                            Your <strong>account</strong> may be
                                            suspended or banned by the admin
                                            team
                                        </li>
                                    </ul>
                                    <p className="mt-2">
                                        Please post responsibly and help keep
                                        the platform safe for everyone.
                                    </p>
                                </div>

                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link href="/home">
                                <Button variant="outline">Go back</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </div>
    );
}
