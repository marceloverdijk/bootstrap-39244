import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <h1>Header</h1>
        <p>Paragraph</p>
      </Container>
    </>
  )
}
