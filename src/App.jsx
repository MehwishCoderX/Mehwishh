import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Expertise from './components/Expertise'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
  
   <div className=''>
    
    <Navbar/>
    <HeroSection/>
    <Expertise/>
    <About/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    
   </div>
  )
}

export default App

