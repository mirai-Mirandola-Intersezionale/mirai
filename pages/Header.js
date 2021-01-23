import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full space-x-4 flex flex-row py-4 px-6 justify-between text-white bg-opacity-0 fixed items-center">
            <div className="logo">
                <b className="text-2xl">mirai</b>
            </div>
            <nav className="">
                <ul className="navBar space-x-4 flex flex-row ">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trova">Trova</Link></li>
                    <li><Link href="/contatti">Contatti</Link></li>
                </ul>
            </nav>
        </header>
    )
}