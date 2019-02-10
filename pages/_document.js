// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <html>
        <title>WIP Camp #11 : Ways to IT Professionals Camp</title>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="WIP Camp #11 : Ways to IT Professionals Camp ค่ายเส้นทางสู่ฝันนักไอที : ค่าย สำหรับน้องๆ มัธยม ปลาย ที่จะพาน้องๆมาทำความรู้จักกับ ไอที อย่างเต็มตัว ตลอดทั้ง ค่าย น้องๆจะได้รับ ความรู้ ความสนุกสนาน จากพี่ๆ ไอที บางมด แล้วเจอกันนะครับ"/>
          <meta name="keywords" content="wipcamp,itcamp,ค่ายไอที,ค่ายคอม"/>
          <meta property="og:title" content="WIP Camp #11 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที " />
          <meta property="og:type" content="company" />
          <meta property="og:url" content="https://wip.camp/" />
          <meta property="og:image" content="../static/img/home.png" />
          <meta property="og:site_name" content="WIP Camp #11 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที" />
          <link rel="stylesheet" href="../static/css/bootstrap.css" crossOrigin="anonymous" type="text/css" />
          <link href="../static/css/font-family-Knewave.css" rel="stylesheet" type="text/css" />
          <link href="../static/css/font-family-Sarabun.css" rel="stylesheet" type="text/css" />
          <link rel="shortcut icon" href="/static/img/favicon/favicon.ico" type="image/x-icon"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/fv-apple.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/static/img/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <script src="../static/script/jquery-3.3.1.slim.min.js" type="text/javascript" rel="stylesheet" crossorigin="anonymous" />
          <script src="../static/script/bootstrap.min.js" type="text/javascript" rel="stylesheet" crossorigin="anonymous" />
          {/* <script dangerouslySetInnerHTML={{__html: googleTagManager}} /> */}
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NFZH4C8');` }} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFZH4C8" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />
        </body>
      </html>
    )
  }
}
