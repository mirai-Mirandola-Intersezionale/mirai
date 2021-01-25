
//SEO
import { NextSeo } from 'next-seo';

//Components
import Main from './Main'

export default function Home() {
  return (
    <div className="">
      <NextSeo
       title="Home | mirai"
      />
      <Main/>
    </div>
  )
}
