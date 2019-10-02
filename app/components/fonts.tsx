import { createGlobalStyle } from 'styled-components'

const FontsComponent = createGlobalStyle`
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
`

export default FontsComponent
