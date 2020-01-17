import React from 'react'

import { css, Global } from '@emotion/core'

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
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
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
