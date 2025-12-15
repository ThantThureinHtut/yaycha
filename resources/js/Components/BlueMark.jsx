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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
export default function BlueMark() {
    const {auth} = usePage().props;

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div>
                    <Badge
                    variant="secondary"
                    className="bg-blue-500 text-white dark:bg-blue-600 gap-1 p-1"
                >
                    <BadgeCheckIcon size={14} />
                </Badge>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className="flex items-center justify-center gap-1">
                             <span className="text-blue-500">Verified Account</span>
                             <BadgeCheckIcon  className="bg-blue-500 text-white dark:bg-blue-600 gap-1 p-1 rounded-full" />
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This account has successfully completed our identity verification process. The Bluemarks badge confirms that this profile is authentic and trustworthy.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className=" flex gap-2 w-full">
                          <AlertDialogCancel className="">Cancel</AlertDialogCancel>
                         <AlertDialogAction className=" bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-700 w-full" >
                            <Link href={route("account.bluemark.verified.dashboard" , {id:auth.user.id })}>verified now</Link>
                         </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
