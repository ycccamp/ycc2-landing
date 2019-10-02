import React from 'react'

import { Box } from 'rebass'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from './seo'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FC Lamoon';
    src: url('/static/fonts/subset-FCLamoonBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'FC Lamoon';
    src: url('/static/fonts/subset-FCLamoonRegular.woff2') format('woff2');
    src: url('/static/fonts/subset-FCLamoonRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'FC Lamoon';
    src: url('/static/fonts/subset-FCLamoonLight.woff2') format('woff2');
    src: url('/static/fonts/subset-FCLamoonLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CS ChatThai';
    src: url('/static/fonts/CSChatThai.woff2') format('woff2');
    src: url('/static/fonts/CSChatThai.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;

    background: linear-gradient(to top, #99ccff, #ffffff);
    overflow: auto;

    font-family: 'FC Lamoon', 'CS ChatThai', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
      <GlobalStyle />
      <SEO />
      {children}
    </FullHeightBox>
  )
}

export default AppComponent
