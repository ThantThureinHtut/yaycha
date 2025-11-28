import PostCreate from "@/Components/Posts/PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
export default function PostCreatePage() {
    const { isMobile } = useTheme();
    return (
        <div className="mx-auto">
            <div className="flex  justify-center m-5">
                <PostCreate value={isMobile} />
            </div>
        </div>
    );
}
