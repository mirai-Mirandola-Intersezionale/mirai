
//SEO
import { NextSeo } from 'next-seo';

//Components
import Link from 'next/link'


export default function Home() {
  return (
    <div className="">
      <NextSeo
       title="Home | mirai"
      />
      <main className="lg:h-screen bg-red-500  text-white  ">
            <div className="px-4 pt-6 pb-24 max-w-screen-xl mx-auto lg:h-full">
                <h1 className="text-7xl font-extrabold">mirai</h1>
                <h3 className="text-2xl font-light">Collettivo autonomo intersezionale</h3>
                <p className="font-normal mt-4">Risorse accessibili per tutt* </p>
                <Link href="/Trova">
                    <button className="uppercase mt-3 px-4 py-2 shadow-md bg-indigo-500 rounded-md">Trova</button>
                </Link>
            </div>
        </main>
    </div>
  )
}
