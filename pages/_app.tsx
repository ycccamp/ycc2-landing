import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { CSSReset, ThemeProvider, theme, DefaultTheme } from '@chakra-ui/core'

import AppShell from '../app/components'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const customTheme: DefaultTheme = {
      ...theme,
      fonts: {
        ...theme.fonts,
        body: `'FC Lamoon', 'CS ChatThai', -apple-system, 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif`,
      },
    }

    return (
      <React.Fragment>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link rel='apple-touch-icon-precomposed' href='/static/favicon.ico' />
        </Head>
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default NextApp
