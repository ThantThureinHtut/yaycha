import { Toaster } from "react-hot-toast";
import Header from "@/Components/Header";
import PostCreateBar from "@/Components/Posts/PostCreateBar";
import { Head } from "@inertiajs/react";
import { FilePlus } from "lucide-react";
import { useTheme } from "next-themes";
export default function GuestLayout({ children }) {
    return (
        <div>
            <Header />
            {/* Children Route */}
            <div>{children}</div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
