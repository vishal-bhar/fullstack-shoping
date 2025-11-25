
import {Link} from "react-router-dom"
import {ModeToggle} from "./ModeToggle"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b dark:bg-zing-900">
        <div>
            <ModeToggle />
        </div>
        <Link to={"/"} className="text-2xl font-bold">code store</Link>
        <ul className="hidden sm:flex gap-2 text-xl">
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Faqs</Link>

        </ul>
    </nav>
  )
}

export default Navbar