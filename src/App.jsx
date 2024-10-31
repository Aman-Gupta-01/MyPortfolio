import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Header/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <div id='home' className='pt-10'>
          <Home />
        </div>
        <div id='about' className='pt-10'>
          <About />
        </div>
        <div id='skills' className='pt-10'>
          <Skills />
        </div>
        <div id='projects' className='pt-10'>
          <Projects />
        </div>
        <div id='contact' className='pt-10'>
          <Contact />
        </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
