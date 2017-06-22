// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html lang="en">
       <Head>
         <style>{`body { margin: 0 } /* custom! */`}</style>
         <meta name="theme-color" content="#333333" />
         <link rel="manifest" href="/static/manifest.json" />
         {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" /> */}
       </Head>
       <body className="custom_class">
         <Main />
         <NextScript />
         <script type="text/javascript" src="/static/cssLoader.js" />
         <script defer type="text/javascript" src="/static/swLoader.js" />
       </body>
     </html>
    )
  }
}
