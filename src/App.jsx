import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {
  About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#1b0747]">
        <div className="">
          <Navbar />
          <Hero />
        </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App