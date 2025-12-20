import { Toaster } from "react-hot-toast";
import Header from "@/Components/Header";
import PostCreateBar from "@/Components/Posts/PostCreateBar";
import { Head } from "@inertiajs/react";
import { FilePlus } from "lucide-react";
import { useTheme } from "next-themes";
export default function GuestLayout({ children }) {

    return (
        <div className="relative">
            <div className="sticky top-0 z-50">
                  <Header  />
            </div>
            {/* Children Route */}
            <div>{children}</div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
