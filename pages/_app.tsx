import App from 'next/app'
import React from 'react'

import { CSSReset, DefaultTheme, theme, ThemeProvider } from '@chakra-ui/core'

import AppShell from '../app/components'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    const customTheme: DefaultTheme = {
      ...theme,
      fonts: {
        ...theme.fonts,
        body: `-apple-system, 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif`,
      },
    }

    return (
      <React.Fragment>
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
