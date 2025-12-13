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
import RootLayout from "./layouts/RootLayout.jsx"
import AdminLayout from "./layouts/AdminLayout.jsx"
import CreateProducts from "./components/custom/CreateProducts"
import AllProducts from "./components/custom/AllProducts"
import Analaytics from "./components/custom/Analaytics"
import Orders from "./components/custom/Orders"
import Settings from "./components/custom/Settings"



function App() {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<RootLayout children={<Home />}/>,
    },
     {
      path:"/signup",
       element:<RootLayout children={<Signup/>} />,
    },
    {
      path:"/login",
        element:<RootLayout children={<Login />}/>,
    },
    {
      path:"/product",
        element:<RootLayout children={<Product />}/>,
    },
     {
      path:"/checkout",
      element:<RootLayout children={<Checkout />}/>,
    },
    {
      path:"/admin/login",
      element:<RootLayout children={<AdminLogin />}/>,
    },
    {
      path:"/admin/deshboard",
      element:<AdminLayout children={<CreateProducts/>} />,
    },
    {
      path:"/admin/deshboard/all-products",
      element:<AdminLayout children={<AllProducts />} />,
    },
    {
      path:"/admin/deshboard/analytics",
      element:<AdminLayout children={<Analaytics />} />,
    },
    {
      path:"/admin/deshboard/orders",
      element:<AdminLayout children={<Orders />} />,
    },
    {
      path:"/admin/deshboard/settings",
      element: <AdminLayout children={<Settings />} />,
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
