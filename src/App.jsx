import React from 'react'
import './index.css'
import Hero from './views/Hero'
import Nav from './components/Nav'
import About from './views/About'
import Tokenomics from './views/Tokenomics'
import Partners from './views/Partners'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav />
      <div className="">
        <Hero />
        <About />
        <Tokenomics />
        <Partners />
        <Footer />
      </div>
    </>
  )
}

export default App
