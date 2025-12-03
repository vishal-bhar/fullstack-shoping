import Footer from "../custom/Footer"
import Navbar from "../custom/Navbar"



function RootLayout({childern}) {
  return <>
  <Navbar />
  {childern}
  <Footer/>
  </>
}

export default RootLayout