import Head from 'next/head'

//SEO
import { NextSeo } from 'next-seo';

//Components
import Header from './Header'
import Main from './Main'

export default function Home() {
  return (
    <div className="">
      <NextSeo
       title="Home | mirai"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
    </div>
  )
}
