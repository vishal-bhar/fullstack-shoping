import Footer from "../components/custom/Footer"
import Navbar from "../components/custom/Navbar"



function RootLayout({children}) {
  return <>
  <Navbar />
  {children}
  <Footer/>
  </>
}

export default RootLayout