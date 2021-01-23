import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="space-x-4 flex flex-row p-4">
            <div className="logo">
                <b>mirai</b>
            </div>
            <nav className="">
                <ul className="navBar space-x-4 flex flex-row">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trova">Trova</Link></li>
                    <li><Link href="/contatti">Contatti</Link></li>
                </ul>
            </nav>
            


        </header>
    )
}