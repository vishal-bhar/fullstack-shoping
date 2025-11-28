import Footer from "./components/custom/Footer.jsx"
import Navbar from "./components/custom/Navbar.jsx"
import { ThemeProvider } from "./components/provider/theme-provider"
import Home from "./pages/Home.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Signup from "./pages/Signup.jsx"


function App() {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar />
      <Home/>
      <Footer/>
               </>,
    },
     {
      path:"/signup",
      element:<>
      <Navbar />
      <Signup/>
      <Footer/>
      </>,
    }
  ])

  return  <>
  <ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>

  </>
}

export default App
