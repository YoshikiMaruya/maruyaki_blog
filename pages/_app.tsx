import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'

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
