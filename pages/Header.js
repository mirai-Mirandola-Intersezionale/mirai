import React from 'react'
import Link from 'next/link'

//Components
import SimpleToggle from '../components/SimpleToggle'

export default function Header() {
    return (
        <header className="w-full flex flex-row justify-between text-white bg-opacity-0 fixed items-center max-w-7xl mx-auto px-4 sm:px-6 border-b-32 py-6 md:space-x-10">
            <div className="logo">
                <Link href="/" alt="Home"><b className="text-2xl">mirai</b></Link>
            </div>
            <nav className="">
                <ul className="navBar space-x-4 flex flex-row ">
                    <li><Link href="/Impara">Impara</Link></li>
                    <li><Link href="/Trova">Trova</Link></li>
                    <li><Link href="/Contatti">Contatti</Link></li>
                </ul>
                <ul className="social-links">
                    <li className="github">
                        <a>
                            <img src="http://placehold.it/"/>
                        </a>
                    </li>
                    <li className="discord">
                        <a>
                            <img src="http://placehold.it/"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}