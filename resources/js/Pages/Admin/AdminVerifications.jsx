import { Badge } from "@/Components/ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import formatDate from "@/Components/Utils/formatDate";
import AdminLayout from "@/Layouts/AdminLayout";
import { MoreHorizontal, Search } from "lucide-react";
import PaginationBar from "@/Components/Admin/PaginationBar";
import UserSearchBar from "@/Components/Admin/UserSearchBar";
import useSearchFilter from "@/Components/Hooks/useSearchFilter";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
export default function AdminVerifications({ users, filters = null }) {
    const [select, setSelect] = useState();
    const { search, setSearch, filter, setFilter } = useSearchFilter(
        "admin.verifications",
        filters,
        "users"
    );
    const statusChangeSubmitHandler = (e, user_id) => {
        router.post(
            route("account.bluemark.verified.update"),
            {
                status: e,
                user_id: user_id,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };
    const statusColorChangeFn = (data) => {
        switch (data) {
            case "success":
                return "bg-green-400";
            case "pending":
                return "bg-orange-400";
            case "rejected":
                return "bg-red-400";
            default:
                return "bg-slate-400";
        }
    };
    return (
        <AdminLayout>
            <div className="flex flex-col gap-4">
                <h1 className="text-lg">#Verification</h1>
                <UserSearchBar
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                    pageName="verifications"
                />
                <div>
                    <Table>
                        <TableCaption>
                            <div className="flex flex-col gap-4">
                                <h1>A list of Users.</h1>
                                <div>
                                    <PaginationBar
                                        links={users.links}
                                        search={search}
                                        filter={filter}
                                    />
                                </div>
                            </div>
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    User id
                                </TableHead>
                                <TableHead>Username</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Login type</TableHead>

                                <TableHead>Verification Status</TableHead>
                                <TableHead>Created Time</TableHead>
                                <TableHead>Check</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.data.map((user) => {
                                if (user.verified_status != "unverified") {
                                    return (
                                        <TableRow key={user.id}>
                                            <TableCell className="font-medium">
                                                {user.id}
                                            </TableCell>
                                            <TableCell>
                                                @{user.username}
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                {user.provider_method}
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="outline"
                                                    className=" w-24"
                                                >
                                                    <div className="flex items-center justify-center gap-0.5">
                                                        <span className="relative flex size-4 items-center justify-center">
                                                            <span
                                                                className={`absolute inline-flex size-2 animate-ping rounded-full ${statusColorChangeFn(
                                                                    user.verified_status
                                                                )} opacity-75`}
                                                            ></span>
                                                            <span
                                                                className={`relative inline-flex items-center justify-center size-2 p-1 rounded-full ${statusColorChangeFn(
                                                                    user.verified_status
                                                                )} text-white`}
                                                            ></span>
                                                        </span>
                                                        <span>
                                                            {
                                                                user.verified_status
                                                            }
                                                        </span>
                                                    </div>
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {formatDate(user.created_at)}
                                            </TableCell>
                                            <TableCell>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline">
                                                            Check
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="min-h-screen h-full overflow-auto custom-scrollbar">
                                                        <DialogHeader className="my-4">
                                                            <DialogTitle className="mb-2">
                                                                <div className="flex justify-between">
                                                                    <div className="text-blue-500 font-bold">
                                                                        <span>
                                                                            @
                                                                            {
                                                                                user.username
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        {formatDate(
                                                                            user.created_at
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </DialogTitle>
                                                            <Separator />
                                                            <DialogDescription
                                                                asChild
                                                            >
                                                                <div className="flex flex-col gap-2 bg-yellow-100 border border-yellow-400 p-2 rounded ">
                                                                    <span>
                                                                        ⚠️ Admin
                                                                        Warning
                                                                    </span>
                                                                    <span>
                                                                        {" "}
                                                                        You are
                                                                        reviewing
                                                                        sensitive
                                                                        user
                                                                        identity
                                                                        information
                                                                        (Government
                                                                        ID,
                                                                        Selfie
                                                                        ID, Date
                                                                        of
                                                                        Birth).
                                                                    </span>
                                                                    <span>
                                                                        {" "}
                                                                        Please
                                                                        check
                                                                        carefully
                                                                        and make
                                                                        sure all
                                                                        details
                                                                        are
                                                                        clear,
                                                                        valid,
                                                                        and
                                                                        belong
                                                                        to the
                                                                        same
                                                                        person
                                                                        before
                                                                        approving.
                                                                    </span>
                                                                    <span>
                                                                        Incorrect
                                                                        approval
                                                                        may
                                                                        cause
                                                                        security
                                                                        or legal
                                                                        issues.
                                                                    </span>
                                                                </div>
                                                            </DialogDescription>
                                                            <div className="flex flex-col gap-6 ">
                                                                <div>
                                                                    <h1 className="text-lg font-bold underline">
                                                                        Government
                                                                        Id
                                                                    </h1>
                                                                    <img
                                                                        src={user.verifiedacountinfo.government_image}
                                                                        alt=""
                                                                        className="border border-black w-full object-cover"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <h1 className="text-lg font-bold underline">
                                                                        Salfie
                                                                        Id
                                                                    </h1>
                                                                    <img
                                                                        src={user.verifiedacountinfo.selfie_image }
                                                                        alt=""
                                                                         className="border border-black w-full object-cover"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end">
                                                    <Select
                                                        defaultValue={
                                                            user.verified_status
                                                        }
                                                        onValueChange={(e) =>
                                                            statusChangeSubmitHandler(
                                                                e,
                                                                user.id
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger className="w-[100px]">
                                                            <SelectValue placeholder="Action" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="pending">
                                                                pending
                                                            </SelectItem>
                                                            <SelectItem value="success">
                                                                success
                                                            </SelectItem>
                                                            <SelectItem value="rejected">
                                                                rejected
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
}
