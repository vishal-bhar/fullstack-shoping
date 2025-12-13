import { Calendar, ChartBar, FilePlus2Icon, GalleryVerticalEnd, Home, Inbox, PackageSearch, Search, Settings } from "lucide-react"

import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"

// Menu items.
const items = [
  {
    title: "Create Product",
    url: "/admin/deshboard",
    icon: FilePlus2Icon,
  },
  {
    title: "All Products",
    url: "/admin/deshboard/all-products",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Orders",
    url: "/admin/deshboard/orders",
    icon: PackageSearch,
  },
  {
    title: "Analytics",
    url: "/admin/deshboard/analytics",
    icon: ChartBar,
  },
  {
    title: "Settings",
    url: "/admin/deshboard/settings",
    icon: Settings,
  }, 
]

 const AppSidebar=()=> {
    const {pathname}=useLocation()
 
 
  return (
    <Sidebar>
        <SidebarHeader>
            <h3 className="text-xl font-bold">Dashboard</h3>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`${pathname===item.url && "bg-zinc-200 dark:bg-zinc-600"}`}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar;