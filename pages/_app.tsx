import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <BrowserRouter> */}
        <Header />
        <Component {...pageProps} />
      {/* </BrowserRouter> */}
    </>
  )
}

export default MyApp
