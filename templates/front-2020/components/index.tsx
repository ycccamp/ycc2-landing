import React from 'react'

import Head from 'next/head'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
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
  const size = 50

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
              background-color: white;
              background-image: linear-gradient(
                  rgba(204, 202, 206, 1) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(204, 202, 206, 1) 1px,
                  transparent 1px
                );
              background-size: ${size}px ${size}px, ${size}px ${size}px;
              backgroundposition: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
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
