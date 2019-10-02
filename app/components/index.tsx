import React from 'react'

import { Box } from 'rebass'
import styled, { createGlobalStyle } from 'styled-components'

import Fonts from './fonts'
import SEO from './seo'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;

    background: linear-gradient(to top, #99ccff, #ffffff);
    overflow: auto;

    font-family: 'FC Lamoon', 'CS ChatThai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #212529;
  }

  #__next {
    height: 100%;
  }
`

const FullHeightBox = styled(Box)`
  height: 100%;
`

const AppComponent: React.FC = props => {
  const {children} = props

  return (
    <FullHeightBox>
      <Fonts />
      <GlobalStyle />
      <SEO />
      {children}
    </FullHeightBox>
  )
}

export default AppComponent
