import Head from 'next/head'
import { PropsWithChildren } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
