import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <b>mirai</b>
            </div>
            <div className="navBar">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trova">Trova</Link></li>
                    <li><Link href="/contatti">Contatti</Link></li>
                </ul>
            </div>
        </header>
    )
}