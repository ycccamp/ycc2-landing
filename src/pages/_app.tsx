import React from 'react'

import withFBQ from 'next-fbq'

import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

import AppShell from '../app/components'

interface IAppProps {
  fullstory: string
}

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    const fullstory = process.env.FULLSTORY ? process.env.FULLSTORY : ''

    return (
      <React.Fragment>
        <Head>
          <meta name='title' content={`Young Creator's Camp`} />
          <meta
            name='description'
            content='เปลี่ยนเด็กช่างฝัน ให้เป็นนักสร้างสรรค์นวัตกรรม'
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://ycc.in.th/' />
          <meta property='og:title' content={`Young Creator's Camp`} />
          <meta
            property='og:description'
            content='เปลี่ยนเด็กช่างฝัน ให้เป็นนักสร้างสรรค์นวัตกรรม'
          />
          <meta property='og:image' content='https://ycc.in.th/static/og.jpg' />
          <meta
            property='og:image:secure_url'
            content='https://ycc.in.th/static/og.jpg'
          />
          <meta property='og:image:alt' content='Banner' />
          <meta property='og:image:width' content='1500' />
          <meta property='og:image:height' content='788' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://ycc.in.th/' />
          <meta property='twitter:title' content={`Young Creator's Camp`} />
          <meta
            property='twitter:description'
            content='เปลี่ยนเด็กช่างฝัน ให้เป็นนักสร้างสรรค์นวัตกรรม'
          />
          <meta
            property='twitter:image'
            content='https://ycc.in.th/static/og.jpg'
          />
        </Head>
        <AppShell fullstory={fullstory}>
          <Component {...pageProps} />
        </AppShell>
      </React.Fragment>
    )
  }
}

export default withFBQ('970434653357485', Router)(NextApp)
