import React from 'react'

//images
import Image from 'next/image'


export default function Main(){

    return (
        <>
        <main className="bg-red-500 w-full h-96 lg:h-screen">
            <div className="flex flex-row space-x-4 justify-center place-items-center h-full p-4">
                <Image src="/img/m.svg" alt="M" width={308} height={196}/>
                <Image src="/img/i_1.svg" alt="I" width={177} height={231}/>
                <Image src="/img/r.svg" alt="R" width={198} height={257}/>
                <Image src="/img/a.svg" alt="A" width={206} height={196}/>
                <Image src="/img/i_2.svg" alt="I" width={177} height={270}/>
            </div>
        </main>
        <main className="bg-indigo-500 h-screen w-full">
                
        </main>
        </>
    )
}