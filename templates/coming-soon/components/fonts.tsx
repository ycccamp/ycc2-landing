import React from 'react'

import { css, Global } from '@emotion/core'

const FontsComponent: React.FC = props => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'FC Lamoon';
          src: url('/static/fonts/FCLamoon/subset-FCLamoonBold.woff')
            format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'FC Lamoon';
          src: url('/static/fonts/FCLamoon/subset-FCLamoonRegular.woff2')
            format('woff2');
          src: url('/static/fonts/FCLamoon/subset-FCLamoonRegular.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'FC Lamoon';
          src: url('/static/fonts/FCLamoon/subset-FCLamoonLight.woff2')
            format('woff2');
          src: url('/static/fonts/FCLamoon/subset-FCLamoonLight.woff')
            format('woff');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'CS ChatThai';
          src: url('/static/fonts/CSChatThai/CSChatThai.woff2') format('woff2');
          src: url('/static/fonts/CSChatThai/CSChatThai.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}
    />
  )
}

export default FontsComponent
