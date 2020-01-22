import React from 'react'

import Head from 'next/head'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

import { theme } from '../theme'

import { Grid } from './grid'
import { Navbar } from './navbar'
import {
  About,
  Contact,
  FAQ,
  Footer,
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
          href='https://fonts.googleapis.com/css?family=Kanit|Poppins:700|Prompt:400,700&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/static/favicon-2020.ico' />
        <link
          rel='apple-touch-icon-precomposed'
          href='/static/favicon-2020.ico'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }
            body {
              background: linear-gradient(
                270deg,
                rgba(244, 215, 242, 1) 0%,
                rgba(255, 255, 255, 1) 100%
              );
            }
          `}
        />
        <Grid />
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
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default FrontComponent
