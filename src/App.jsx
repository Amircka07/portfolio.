import './App.css'
import About from './Components/About/About'
import { ScrollButton } from './Components/ButtonUp/ButtonUp'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <ToastContainer/>
      <Navbar menu={menu} setMenu={setMenu}/>
      <ScrollButton setMenu={setMenu}/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
