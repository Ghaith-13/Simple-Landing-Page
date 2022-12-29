import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

function contact() {
  return (
    <div>
        <Hero heading="Contact" message="Submit from the form." />
        <Contact />
    </div>
  )
}

export default contact