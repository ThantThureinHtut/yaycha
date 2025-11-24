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
export default function BlueMark() {


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
                <AlertDialogFooter className="inline-flex sm:justify-center w-full">
                         <AlertDialogAction className="bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-700 w-full" >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
