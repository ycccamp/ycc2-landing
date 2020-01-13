import React from 'react'

import { Box } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

import Fonts from './fonts'
import HeadTitle from '../../core/components/HeadTitle'

const AppComponent: React.FC = props => {
  const {children} = props

  return (
    <React.Fragment>
      <Fonts />
      <Global
        styles={css`
          html, #__next {
            height: 100%;
          }
        
          body {
            height: 100%;
            margin: 0;
        
            background: linear-gradient(to top, #99ccff, #ffffff);
            overflow: auto;
          }
        `}
      />
      <HeadTitle />
      <Box height='100%'>
        {children}
      </Box>
    </React.Fragment>
  )
}

export default AppComponent
