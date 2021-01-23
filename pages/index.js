import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mirai | Collettivo LGBTQI+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
