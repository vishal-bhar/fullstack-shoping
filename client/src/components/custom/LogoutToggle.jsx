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
import { useDispatch } from "react-redux"
import { setUserLogout } from "@/redux/slices/authSlice"

function LogoutToggle({user}) {
  const disatch=useDispatch()
  return (
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Avatar className="cursor-pointer">
  <AvatarFallback className="text-xl">{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="center">
    <DropdownMenuItem onClick={()=>disatch(setUserLogout()) }>Logout</DropdownMenuItem>
    <Link to="/orders">
    <DropdownMenuItem>My Orders</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default LogoutToggle