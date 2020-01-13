import React from 'react'

import Head from 'next/head'

import { IHeadTitleProps } from '../@types/IHeadTitleProps'

const HeadTitle: React.FC<IHeadTitleProps> = props => {
  const { title } = props

  return (
    <Head>
      <title>
        {title
          ? `${typeof title === 'string' ? title : title.join(' · ')} | Young Creator's Camp`
          : `Young Creator's Camp`}
      </title>
    </Head>
  )
}

export default HeadTitle
