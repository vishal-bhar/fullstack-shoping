import Footer from "../components/custom/Footer"
import Navbar from "../components/custom/Navbar"



function RootLayout({childern}) {
  return <>
  <Navbar />
  {childern}
  <Footer/>
  </>
}

export default RootLayout