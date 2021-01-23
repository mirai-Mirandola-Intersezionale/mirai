import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Header'
import Main from './Main'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>mirai | Collettivo LGBTQI+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
    </div>
  )
}
