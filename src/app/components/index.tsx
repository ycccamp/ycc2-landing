import React from 'react'

import { Box } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'
import FullStory from 'react-fullstory'

import HeadTitle from '../../core/components/HeadTitle'

import { IProps } from '../@types/IProps'

const AppComponent: React.FC<IProps> = props => {
  const { children, fullstory } = props

  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      />
      <HeadTitle />
      <FullStory org={fullstory} />
      <Box height='100%'>{children}</Box>
    </React.Fragment>
  )
}

export default AppComponent
