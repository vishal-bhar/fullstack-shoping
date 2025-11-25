import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Link } from "react-router-dom"

function LogoutToggle() {
  return (
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Avatar className="cursor-pointer">
  <AvatarFallback className="text-xl">BB</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="center">
    <DropdownMenuItem>Logout</DropdownMenuItem>
    <Link to="/orders">
    <DropdownMenuItem>My Orders</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default LogoutToggle