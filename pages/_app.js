import Head from 'next/head'
import '../styles/globals.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SuperCrip</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Supercrip is a feature film about a disabled actor in Hollywood produced and directed by the people who madeBOTTLE SHOCK, CBGB, NOBEL SON, MARILYN HOTCHKISS AND COFFEE WARS" />
      </Head>
      <Component {...pageProps} /> 
    </>
  )
}

export default MyApp
