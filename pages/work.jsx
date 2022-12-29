import React from 'react'
import Hero from '../components/Hero'
import Portofolio from '../components/portofolio'

function work() {
  return (
    <div>
        <Hero heading="My Work" message="this is some of my work." />
        <Portofolio />
    </div>
  )
}

export default work