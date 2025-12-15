import { Button } from "@/Components/ui/button";
import { Github } from "lucide-react";
import GoogleIcon from "@/Components/GoogleIcon";
export default function OAuthButtons() {
    return (
        <div className="flex items-center justify-center gap-4 mt-4">
            {/* OAuth Login Option */}
            <Button
                variant="outline"
                className="w-full"
                onClick={() => (window.location.href = "/auth/github/redirect")}
            >
                <Github  size={60}/>
            </Button>
            <Button
                variant="outline"
                className="w-full"
                onClick={() => (window.location.href = "/auth/google/redirect")}
            >
                <GoogleIcon  />
            </Button>
        </div>
    );
}
