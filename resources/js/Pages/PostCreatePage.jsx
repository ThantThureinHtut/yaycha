import PostCreate from "@/Components/Posts/PostCreate";
import { useTheme } from "@/src/Context/ThemeContext";
export default function PostCreatePage() {
    const {isMobile} = useTheme();
    return (
        <div className="m-4 min-h-screen ">
            <div className="">
                  <PostCreate value={isMobile}/>
            </div>

        </div>
    );
}
