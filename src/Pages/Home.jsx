import React from 'react'
import './Home.css'
import Hero from '../Components/Hero/Hero'
import Work from '../Components/Work/Work'
import About from '../Components/About/About'

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Work/>
      <About/>
    </div>
  )
}

export default Home
