import {
    Item,
    ItemActions,
    ItemHeader,
    ItemFooter,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/Components/ui/item";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import AdminLayout from "@/Layouts/AdminLayout";
import { useTheme } from "@/src/Context/ThemeContext";
import { Moon, Settings, Sun } from "lucide-react";

export default function AdminSettings() {
    const { theme, setTheme} = useTheme();
    return (
        <AdminLayout>
            <div className="flex flex-col gap-4">
                <h1 className="text-lg">#Settings</h1>
                <div>
                    <Item variant="outline">
                        <ItemContent>
                            <div className="flex items-center justify-between">
                                <div>
                                    <ItemTitle>Dark Mode</ItemTitle>
                                    <ItemDescription>Dark | Light | System</ItemDescription>
                                </div>
                                <div>
                                    <Select defaultValue={theme} onValueChange={setTheme}>
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="System"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                <span className="flex items-center gap-1">
                                                     <Sun size={15}/>
                                                    <span>Light</span>
                                                </span>
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                <span className="flex items-center gap-1">
                                                     <Moon size={15}/>
                                                    <span>Dark</span>
                                                </span>
                                            </SelectItem>
                                            <SelectItem value="system">
                                                <span className="flex items-center gap-1">
                                                     <Settings size={15}/>
                                                    <span>System</span>
                                                </span>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </ItemContent>
                    </Item>
                </div>
            </div>
        </AdminLayout>
    );
}
