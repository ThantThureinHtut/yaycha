import { Button } from "@/Components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


import { Badge } from "@/components/ui/badge";
import AdminLayout from "@/Layouts/AdminLayout";
import { MoreHorizontalIcon, Search } from "lucide-react";

import { useEffect, useState } from "react";
import formatDate from "@/Components/Utils/formatDate";
import { router, usePage } from "@inertiajs/react";

import PaginationBar from "@/Components/Admin/PaginationBar";
import UserSearchBar from "@/Components/Admin/UserSearchBar";
import useSearchFilter from "@/Components/Hooks/useSearchFilter";

export default function AdminAllUser({ userData, filters = null }) {
    const {search, setSearch, filter, setFilter  } = useSearchFilter("admin.allUser" , filters , "userData" );
    const statusColorChangeFn = (data) => {
        switch (data) {
            case "success":
                return "bg-green-400";
            case "pending":
                return "bg-orange-400";
            case "rejected":
                return "bg-red-400"
            default:
                return "bg-slate-400";
        }
    };

    return (
        <AdminLayout>
            <div className="flex flex-col gap-4">
                <h1 className="text-lg">#All User</h1>
                 <UserSearchBar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} pageName="user"  />
                <div>
                    <Table>
                        <TableCaption>
                            <div className="flex flex-col gap-4">
                                <h1>A list of Users.</h1>
                                <div>
                                    <PaginationBar links={userData.links} search={search} filter={filter}/>
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
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userData.data.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">
                                        {user.id}
                                    </TableCell>
                                    <TableCell>@{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        {user.provider_method}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className=" w-24">
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
                                                    {user.verified_status}
                                                </span>
                                            </div>
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(user.created_at)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end">
                                            <MoreHorizontalIcon />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
}
