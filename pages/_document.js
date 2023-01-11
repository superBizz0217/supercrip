import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" as="font" href="/fonts/AWAKENNING.ttf" type="font/ttf" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/jvs2pww.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}