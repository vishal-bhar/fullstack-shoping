import Navbar from "./components/custom/Navbar.jsx"
import { ThemeProvider } from "./components/provider/theme-provider"
import Home from "./pages/Home.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"


function App() {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar />
      <Home/>
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
