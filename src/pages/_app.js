import { Readex_Pro } from '@next/font/google'
import '@Styles/globals.css'

const readexPro = Readex_Pro({ subsets: ['latin'], weight: ['200', '400', '600', '700'] })

function MyApp({ Component, pageProps }) {
  return<Component {...pageProps} className={readexPro.className} />
}

export default MyApp
