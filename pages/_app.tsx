import React from 'react'
import App from 'next/app'

import AppShell from '../app/components'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    )
  }
}

export default MyApp
