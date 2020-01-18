import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

import { theme } from '../theme'

import { Navbar } from './navbar'
import {
  About,
  Contact,
  FAQ,
  Gallery,
  Hero,
  Join,
  Schedule,
  Sponsor,
  Venue,
} from './section'

const FrontComponent: React.FC = props => {
  return (
    <React.Fragment>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Kanit|Poppins:700|Prompt&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </React.Fragment>
  )
}

export default FrontComponent
