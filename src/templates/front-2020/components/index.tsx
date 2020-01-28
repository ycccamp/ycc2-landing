import React, { useEffect } from 'react'

import Head from 'next/head'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

import { theme } from '../theme'

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

import smoothscroll from 'smoothscroll-polyfill'

const FrontComponent: React.FC = props => {
  const size = 10
  const space = 150

  useEffect(() => {
    if (typeof window !== 'undefined') {
      smoothscroll.polyfill()
    }
  }, [])

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
              background-image: radial-gradient(
                  rgba(64, 147, 164, 0.5) ${size}px,
                  transparent ${size}px
                ),
                radial-gradient(
                  rgba(232, 100, 119, 0.5) ${size}px,
                  transparent ${size}px
                );
              background-size: ${space * 2}px ${space * 2}px;
              background-position: 0 0, ${space}px ${space}px;
              animation: lineMove 2s infinite linear;
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
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default FrontComponent
