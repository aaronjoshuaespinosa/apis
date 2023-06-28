import React from 'react'
import './index.css'
import Hero from './views/Hero'
import Nav from './components/Nav'
import About from './views/About'
import Tokenomics from './views/Tokenomics'

function App() {

  return (
    <>
      <Nav />
      <div className="">
        <Hero />
        <About />
        <Tokenomics />
      </div>
    </>
  )
}

export default App
