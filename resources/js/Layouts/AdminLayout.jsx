// 1. Fix the Import: Change "AppSlider" to "AppSidebar"
import { AppSidebar } from "@/Components/Admin/AppSider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({ children ,verifiedUserCounts }) {
  return (
    <SidebarProvider>
      <div className="flex  w-full min-h-screen overflow-auto p-2">
        <AppSidebar verifiedUserCounts={verifiedUserCounts}/>
        <main className="flex gap-3 w-full m-1">
            <div className="p-2 shadow rounded-lg">
                <SidebarTrigger />
            </div>
            <div className="flex-1 p-4 mx-auto  shadow w-full h-full rounded-xl">
                <div>
                    {children}
                </div>
            </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
