import PostCreate from "@/Components/Posts/PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
export default function PostCreatePage() {

    return (
        <div className="mx-auto">
            <div className="flex  justify-center m-5">
                <PostCreate/>
            </div>
        </div>
    );
}
