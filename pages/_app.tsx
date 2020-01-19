import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import AppShell from '../app/components'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta name='title' content={`Young Creator's Camp`} />
          <meta
            name='description'
            content='ค่ายเปลี่ยนวันมันธ์เป็น "นักสร้างสรรค์" ใน 3 วัน'
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://ycc.in.th/' />
          <meta property='og:title' content={`Young Creator's Camp`} />
          <meta
            property='og:description'
            content='ค่ายเปลี่ยนวันมันธ์เป็น "นักสร้างสรรค์" ใน 3 วัน'
          />
          <meta
            property='og:image'
            content='https://ycc.in.th/static/images/og-2020.jpg'
          />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://ycc.in.th/' />
          <meta property='twitter:title' content={`Young Creator's Camp`} />
          <meta
            property='twitter:description'
            content='ค่ายเปลี่ยนวันมันธ์เป็น "นักสร้างสรรค์" ใน 3 วัน'
          />
          <meta
            property='twitter:image'
            content='https://ycc.in.th/static/images/og-2020.jpg'
          />
        </Head>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </React.Fragment>
    )
  }
}

export default NextApp
