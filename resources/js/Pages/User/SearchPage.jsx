import Blog from "@/Components/Blogs/Blog";
import SearchBox from "@/Components/SearchBox";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
export default function SearchPage() {
    return (
        <div className="p-6 ">
            <div className="flex flex-col gap-4 lg:w-1/2 container mx-auto ">
                <Link href="/home" >
                    <ArrowLeft
                        size={30}
                        className="dark:bg-white dark:text-black bg-primary text-white  p-1 rounded-full"
                    />
                </Link>
                <SearchBox />
            </div>
            {/* <Blog /> */}
        </div>
    );
}
