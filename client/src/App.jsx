import Footer from "./components/custom/Footer.jsx"
import Navbar from "./components/custom/Navbar.jsx"
import { ThemeProvider } from "./components/provider/theme-provider"
import Home from "./pages/Home.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import Product from "./pages/Product.jsx"
import Checkout from "./pages/Checkout.jsx"
import AdminLogin from "./pages/AdminLogin.jsx"
import Error from "./pages/Error.jsx"
import Success from "./pages/Success.jsx"
import RootLayout from "./components/layouts/RootLayout.jsx"



function App() {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<RootLayout childern={<Home />}/>,
    },
     {
      path:"/signup",
       element:<RootLayout childern={<Signup/>} />,
    },
    {
      path:"/login",
        element:<RootLayout childern={<Login />}/>,
    },
    {
      path:"/product",
        element:<RootLayout childern={<Product />}/>,
    },
     {
      path:"/checkout",
      element:<RootLayout childern={<Checkout />}/>,
    },
    {
      path:"/admin/login",
      element:<RootLayout childern={<AdminLogin />}/>,
    },
    {
      path:"/*",
      element:
      <Error/>
     ,
    },
       {
      path:"/success",
      element:(
      <Success/>
     ),
    },
  ])

  return  <>
  <ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>

  </>
}

export default App
