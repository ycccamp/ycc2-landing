import React from 'react'

import About from './about'
import Contact from './contact'
import FAQ from './faq'
import Gallery from './gallery'
import Hero from './hero'
import Join from './join'
import Navbar from './navbar'
import Schedule from './schedule'
import Sponsor from './sponsor'
import Venue from './venue'

const FrontComponent: React.FC = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Join />
      <Schedule />
      <Venue />
      <Gallery />
      <FAQ />
      <Sponsor />
      <Contact />
    </React.Fragment>
  )
}

export default FrontComponent
