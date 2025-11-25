
import {Link} from "react-router-dom"
import {ModeToggle} from "./ModeToggle"
import CartDrawer from "./cartDrawer"
import { useState } from "react"
import { User } from "lucide-react"
import LogoutToggle from "./LogoutToggle"



function Navbar() {
    const [isAuthenticated,setIsAuthenticated]=useState(true)



  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b dark:bg-zing-900">
        <div className="flex gap-2 justify-center items-center">
            <ModeToggle />
            <CartDrawer/>
            {
isAuthenticated ? (<LogoutToggle />)
:(
    <Link to={"/Login"}>
        <User strokeWidth={1.3} size={28} className="text-gray-800 dark:text-white hover:scale-105 transition-all ease-in-out"/>
    </Link>
)
            }
        </div>
        <Link to={"/"} className="text-2xl font-bold">codeStore</Link>
        <ul className="hidden sm:flex gap-2 text-xl">
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Faqs</Link>

        </ul>
    </nav>
  )
}

export default Navbar