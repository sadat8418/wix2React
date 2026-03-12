import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./Hero"
import Sec2 from "./sec2"
import CraftSection from './sec3'
import WorkSection from './sec4'
import TestimonialSection from './sec4 copy'
import ProcessSection from './sec6'
import AutoGallery from './sec7'
import Banner from './sec8'
import Parallax from './sec3'
import Footer from './sec9'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Nav/> */}
     
      <Hero/>
       <Sec2/> 

      <Parallax/>
      <WorkSection/> 
        <TestimonialSection/> 
       <ProcessSection/> 
      <AutoGallery/>  
         <Banner/> 
        <Footer/>
    </>
  )
}

export default App
