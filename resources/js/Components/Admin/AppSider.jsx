import { Home, Verified, Settings, User, Rabbit, LogOut, BookDashedIcon } from "lucide-react";
import { Link } from "@inertiajs/react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// 1. Define your menu items here
const items = [
    { title: "Dashboard", url: "admin.dashboard", icon: BookDashedIcon },
    { title: "Verifications", url: "admin.verifications", icon: Verified },
    { title: "All Users", url: "admin.allUser", icon: User },
    { title: "Settings", url: "admin.settings", icon: Settings },
    {title: "User Home" , url: "home" , icon:Home},
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-4">
                        <div className="text-primary flex items-center gap-1 ">
                            <Rabbit />
                            <h1 className="text-lg font-bold">Yaycha</h1>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild >
                                        {/* We use Inertia Link so the page doesn't reload */}
                                            <Link
                                                href={route(item.url)}
                                                className="flex items-center"
                                            >
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                           <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                        <Link href="/logout" method="POST">
                                            <LogOut/>
                                            <span>Logout</span>
                                        </Link>
                                </SidebarMenuButton>
                           </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
