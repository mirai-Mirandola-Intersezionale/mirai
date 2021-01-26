import React from 'react'

//images
import Image from 'next/image'


export default function Main(){

    return (
        <>
        <main className="bg-red-500 h-screen text-white max-w-screen-xl pt-10">
            <div className="flex flex-col space-x-4 justify-start p-4">
                {/* <Image src="/img/m.svg" alt="M" width={308} height={196}/>
                <Image src="/img/i_1.svg" alt="I" width={177} height={231}/>
                <Image src="/img/r.svg" alt="R" width={198} height={257}/>
                <Image src="/img/a.svg" alt="A" width={206} height={196}/>
                <Image src="/img/i_2.svg" alt="I" width={177} height={270}/> */}

                <h1 className="text-8xl font-extrabold">mirai</h1>
                <br/>
                <h3 className="m-0 text-2xl font-light">Collettivo Autonomo LGBTQI+ Transfemminista</h3>
            </div>
        </main>
        </>
    )
}