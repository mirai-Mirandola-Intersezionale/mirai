import React from 'react'
import Link from 'next/link'

//Components


//Images

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
        <header className="w-full fixed p-4 flex flex-wrap items-center justify-between bg-opacity-0 text-white">
            <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <div className="logo">
                    <Link href="/" alt="Home"><b className="text-2xl">mirai</b></Link>
                </div>

                <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                <img src={isNavbarOpen ? 'https://s2.svgbox.net/hero-outline.svg?ic=x&color=ffffff' : 'https://s2.svgbox.net/hero-outline.svg?ic=menu&color=ffffff'} width="28" height="28"/>
                </button>
            </div>
            <nav className={
            "lg:flex flex-grow items-center space-x-4 divide-x bg-red-500" +
            (isNavbarOpen ? " flex" : " hidden")
            } >
                <div className="flex flex-col divide-y w-full">
                    <ul className="lg:space-x-4 space-y-4 flex-col lg:flex-row list-none text-right">
                        <li><Link href="/Impara">Impara</Link></li>
                        <li><Link href="/Trova">Trova</Link></li>
                        <li><Link href="/Contatti">Contatti</Link></li>
                    </ul>
                    <ul className="social-links space-x-4 flex flex-row pl-4 pt-2 justify-end">
                        <li className="github">
                            <a href="https://github.com/mirai-plus/mirai" target="_blank">
                                <img src="https://s2.svgbox.net/social.svg?ic=github&color=ffffff" width="28" height="28"/>
                            </a>
                        </li>
                        <li className="discord">
                            <a href="https://discord.gg/dRmhEgGsWH" target="_blank">
                            <img src="https://s2.svgbox.net/social.svg?ic=discord&color=ffffff" width="28" height="28"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}