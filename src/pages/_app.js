import { Analytics } from '@vercel/analytics/react'
import { Readex_Pro } from '@next/font/google'
import '@Styles/globals.css'

const readexPro = Readex_Pro({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
})

function MyApp({ Component, pageProps }) {
  const getLayout = Component.layout || ((page) => page)

  return (
    <>
      {getLayout(<Component {...pageProps} className={readexPro.className} />)}
      <Analytics />
    </>
  )
}

export default MyApp
