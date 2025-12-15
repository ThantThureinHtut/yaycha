import { GrowthChart } from "@/Components/Admin/GrowthChart";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    CircleAlert,
    ClockAlert,
    MailWarning,
    User,
    Verified,
} from "lucide-react";

export default function AdminDashboard({ userChartData, postChartData , userCounts , bluemarkUserCounts ,verifiedUserCounts}) {

    return (
        <AdminLayout>
            <div className="flex flex-col gap-3">
                <h1 className="text-lg">#Dashboard</h1>
                {/* User, Bluemake , Verified User */}
                <div>
                    <ul className="flex flex-col lg:flex-row  gap-3">
                        <li className="flex-1">
                            <div className="flex flex-col justify-center gap-1 items-center p-4 bg-green-200 border border-green-500 rounded-md text-green-600">
                                <User  className="size-8" />
                                <h1 className="text-xl font-bold">{userCounts}</h1>
                                <h1 className="text-sm "> Users</h1>
                            </div>
                        </li>
                        <li className="flex-1">
                            <div className="flex flex-col justify-center gap-1 items-center p-4 bg-orange-200 border border-yellow-500 rounded-md text-yellow-600">
                                <span className="relative flex size-8 items-center justify-center">
                                    <span className="absolute inline-flex size-9 animate-ping rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex items-center justify-center size-10 p-2 rounded-full bg-orange-400 text-white">
                                        <ClockAlert className="" />
                                    </span>
                                </span>
                                <h1 className="text-xl font-bold">{verifiedUserCounts}</h1>
                                <h1 className="text-sm ">
                                    {" "}
                                    Users left to approve!!
                                </h1>
                            </div>
                        </li>
                        <li className="flex-1">
                            <div className="flex flex-col justify-center gap-1 items-center p-4 bg-blue-200 border border-blue-500 rounded-md text-blue-600">
                                <Verified className="size-8" />
                                <h1 className="text-xl font-bold">{bluemarkUserCounts}</h1>
                                <h1 className="text-sm ">Bluemark users</h1>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Chart Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div className="">
                        <GrowthChart data={userChartData} name="User" />
                    </div>
                    <div className="">
                        <GrowthChart data={postChartData} name="Post" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
