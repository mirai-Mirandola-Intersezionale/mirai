import React from 'react'
import Link from 'next/link'

//images
import Image from 'next/image'


export default function Main(){

    return (
        <>
        <main className="lg:h-screen bg-red-500  text-white  ">
            <div className="px-4 pt-6 pb-24 max-w-screen-xl mx-auto lg:h-full">
                {/* <Image src="/img/m.svg" alt="M" width={308} height={196}/>
                <Image src="/img/i_1.svg" alt="I" width={177} height={231}/>
                <Image src="/img/r.svg" alt="R" width={198} height={257}/>
                <Image src="/img/a.svg" alt="A" width={206} height={196}/>
                <Image src="/img/i_2.svg" alt="I" width={177} height={270}/> */}

                <h1 className="text-7xl font-extrabold">mirai</h1>
                <h3 className="text-2xl font-light">Collettivo Autonomo LGBTQI+ Transfemminista</h3>
                <p className="font-normal mt-4">Risorse accessibili per tutt* </p>
                <Link href="/trova">
                    <button className="uppercase mt-3 px-4 py-2 shadow-md bg-indigo-500 rounded-md">Trova</button>
                </Link>
            </div>
        </main>
        </>
    )
}