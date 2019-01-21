// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <title>WIP Camp #11 : Ways to IT Professionals Camp</title>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="WIP Camp #11 : Ways to IT Professionals Camp ค่ายเส้นทางสู่ฝันนักไอที : ค่าย สำหรับน้องๆ มัธยม ปลาย ที่จะพาน้องๆมาทำความรู้จักกับ ไอที อย่างเต็มตัว ตลอดทั้ง ค่าย น้องๆจะได้รับ ความรู้ ความสนุกสนาน จากพี่ๆ ไอที บางมด แล้วเจอกันนะครับ"/>
          <meta name="keywords" content="wipcamp,itcamp,ค่ายไอที,ค่ายคอม"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Sarabun" rel="stylesheet" />
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link rel="shortcut icon" href="/static/img/favicon/favicon.ico" type="image/x-icon"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png"/>
          <link rel="icon" href="/static/img/favicon.ico" type="/imgae/x-icon"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/static/img/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
