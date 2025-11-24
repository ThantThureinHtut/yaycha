
import Header from "@/Components/Header";
import PostCreateBar from "@/Components/Posts/PostCreateBar";
import { Head } from "@inertiajs/react";
import { FilePlus } from "lucide-react";
export default function GuestLayout({ children }) {
    return (
        <div >
            <Header/>
            <PostCreateBar />
            {/* Children Route */}
            <div>{children}</div>
        </div>
    );
}
