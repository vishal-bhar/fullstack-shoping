import { ThemeProvider } from "./components/provider/theme-provider"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.jsx"
import MyOrders from "./pages/MyOrders.jsx"
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
import ProtectedRoute from "./components/custom/ProtectedRoute"
import { Provider } from "react-redux"
import { store } from "./redux/store.js"
import { Toaster } from "sonner";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><RootLayout children={<Home />} /></ProtectedRoute>,
    },
    {
      path: "/signup",
      element: <ProtectedRoute><RootLayout children={<Signup />} /></ProtectedRoute>,
    },
    {
      path: "/login",
      element: <ProtectedRoute><RootLayout children={<Login />} /></ProtectedRoute>,
    },
    {
      path: "/product",
      element: <RootLayout children={<Product />} />,
    },
    {
      path: "/checkout",
      element: <ProtectedRoute><RootLayout children={<Checkout />} /></ProtectedRoute>,
    },
    {
      path: "/orders",
      element: <ProtectedRoute><RootLayout children={<MyOrders />} /></ProtectedRoute>,
    },
    {
      path: "/admin/login",
      element: <ProtectedRoute><RootLayout children={<AdminLogin />} /></ProtectedRoute>,
    },
    {
      path: "/admin/dashboard",
      element: <ProtectedRoute><AdminLayout children={<CreateProducts />} /></ProtectedRoute>,
    },
    {
      path: "/admin/dashboard/all-products",
      element: <ProtectedRoute><AdminLayout children={<AllProducts />} /></ProtectedRoute>,
    },
    {
      path: "/admin/dashboard/analytics",
      element: <ProtectedRoute><AdminLayout children={<Analaytics />} /></ProtectedRoute>,
    },
    {
      path: "/admin/dashboard/orders",
      element: <ProtectedRoute><AdminLayout children={<Orders />} /></ProtectedRoute>,
    },
    {
      path: "/admin/dashboard/settings",
      element: <ProtectedRoute> <AdminLayout children={<Settings />} /></ProtectedRoute>,
    },
    {
      path: "/*",
      element:
        <Error />
      ,
    },
    {
      path: "/success",
      element: (
        <Success />
      ),
    },
  ])

  return <>
    <ThemeProvider>
      <Provider store={store}>
        <Toaster />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>

  </>
}

export default App
