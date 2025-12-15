
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link, useForm , usePage } from "@inertiajs/react";

export default function AuthLayout({ children }) {
const location = usePage().url;

    // detect active tab from URL
    const activeTab = location.includes("/register") ? "signup" : "login";
    return (
        <div className="flex items-center justify-center min-h-screen overflow-auto p-4">
            <Tabs value={activeTab} className="w-[400px]">
                <div className=" flex justify-center items-center">
                    <TabsList>
                        <TabsTrigger value="login"><Link href="/login">Login</Link></TabsTrigger>
                        <TabsTrigger value="signup"><Link href="/register">Signup</Link></TabsTrigger>
                    </TabsList>
                </div>

                {/* Children route */}
                <div>
                      {children}
                </div>
            </Tabs>
        </div>
    );
}
