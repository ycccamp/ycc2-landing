import App from 'next/app'
import React from 'react'

import AppShell from '../app/components'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </React.Fragment>
    )
  }
}

export default NextApp
