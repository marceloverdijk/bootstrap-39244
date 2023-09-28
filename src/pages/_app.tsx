import type { AppProps } from 'next/app'
import { Open_Sans, Poppins } from 'next/font/google'
import '@/styles/styles.scss'
import Layout from '@/components/Layout'

const open_sans = Open_Sans({
  display: 'swap' ,
  subsets: ['latin'],
  variable: '--font-open-sans',
  // weight: ['400', '500', '600', '700', '800'],
})

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={`${open_sans.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
