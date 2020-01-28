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
          {`<script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '970434653357485');
            fbq('track', 'PageView');
          </script>
          <noscript><img height='1' width='1' style='display:none'
            src='https://www.facebook.com/tr?id=970434653357485&ev=PageView&noscript=1'
          /></noscript>`}
        </Head>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </React.Fragment>
    )
  }
}

export default NextApp
