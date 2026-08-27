import React from 'react'
import Hero from './Component/Hero'
import About from './Component/About'
import Navbar from './Component/Navbar'
import Features from './Component/Features'
import Story from './Component/Story'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
    {/* <h1 className='text-5xl text-orange-500 font-bold'>welcome to award</h1> */}
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <Story/>
    <Contact/>
    <Footer/>
    
    </main>
    </>
  )
}

export default App