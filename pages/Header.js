import React from 'react'
import Link from 'next/link'

//Components
import SimpleToggle from './SimpleToggle'

export default function Header() {
    return (
        <header className="w-full space-x-4 flex flex-row py-4 px-6 justify-between text-white bg-opacity-0 fixed items-center">
            <div className="logo">
                <Link href="/" alt="Home"><b className="text-2xl">mirai</b></Link>
            </div>
            <nav className="">
                <ul className="navBar space-x-4 flex flex-row ">
                    <li><Link href="/Trova">Trova</Link></li>
                    <li><Link href="/Contatti">Contatti</Link></li>
                </ul>
            </nav>
        </header>
    )
}