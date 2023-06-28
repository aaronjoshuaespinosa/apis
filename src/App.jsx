import React from 'react'
import './index.css'
import Hero from './views/Hero'
import Nav from './components/Nav'
import About from './views/About'

function App() {

  return (
    <>
      <Nav />
      <div className="">
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App
