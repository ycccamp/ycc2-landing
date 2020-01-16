import React from 'react'

import { Box } from '@chakra-ui/core'

import HeadTitle from '../../core/components/HeadTitle'
import Fonts from './fonts'

const AppComponent: React.FC = props => {
  const { children } = props

  return (
    <React.Fragment>
      <Fonts />
      <HeadTitle />
      <Box>{children}</Box>
    </React.Fragment>
  )
}

export default AppComponent
