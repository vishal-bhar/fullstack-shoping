import Footer from "./components/custom/Footer.jsx"
import Navbar from "./components/custom/Navbar.jsx"
import { ThemeProvider } from "./components/provider/theme-provider"
import Home from "./pages/Home.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import Product from "./pages/Product.jsx"
import Checkout from "./pages/Checkout.jsx"



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
    },
    {
      path:"/login",
      element:<>
      <Navbar />
      <Login/>
      <Footer/>
      </>,
    },
    {
      path:"/product",
      element:<>
      <Navbar />
      <Product/>
      <Footer/>
      </>,
    },
     {
      path:"/checkout",
      element:<>
      <Navbar />
      <Checkout/>
      <Footer/>
      </>,
    },
  ])

  return  <>
  <ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>

  </>
}

export default App
