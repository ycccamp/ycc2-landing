import React from 'react'

import Head from 'next/head'

import { DefaultTheme, theme, ThemeProvider } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

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
  const customTheme: DefaultTheme = {
    ...theme,
    fonts: {
      ...theme.fonts,
      heading: `'Poppins', 'Kanit', Futura, -apple-system, 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif`,
      body: `'Noto Sans Thai UI', -apple-system, 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif`,
    },
  }

  return (
    <React.Fragment>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Kanit|Poppins:700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={customTheme}>
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
