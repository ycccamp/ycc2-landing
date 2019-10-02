import Document, { Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

interface IProps {
  styleTags: string
}

class NextDocument extends Document<IProps> {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return {...page, styleTags}
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default NextDocument
