import React from 'react'

import { Box } from 'rebass'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FC Lamoon';
    src: url('/fonts/subset-FCLamoonBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'FC Lamoon';
    src: url('/fonts/subset-FCLamoonRegular.woff2') format('woff2');
    src: url('/fonts/subset-FCLamoonRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'FC Lamoon';
    src: url('/fonts/subset-FCLamoonLight.woff2') format('woff2');
    src: url('/fonts/subset-FCLamoonLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CS ChatThai';
    src: url('/fonts/CSChatThai.woff2') format('woff2');
    src: url('/fonts/CSChatThai.woff') format('woff');
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
    font-family: 'CS ChatThai', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const AppComponent: React.FC = props => {
  const {children} = props

  return (
    <Box>
      <GlobalStyle />
      {children}
    </Box>
  )
}

export default AppComponent
