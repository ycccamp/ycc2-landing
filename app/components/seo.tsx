import React from 'react'

import { Helmet } from 'react-helmet'

const SEOComponent: React.FC = props => {
  return (
    <Helmet
      htmlAttributes={{lang: 'en'}}
      defaultTitle={`Young Creator's Camp`}
      link={[
        {
          rel: 'shortcut icon',
          href: '/static/favicon.ico',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/static/favicon.ico',
        },
      ]}
    />
  )
}

export default SEOComponent
