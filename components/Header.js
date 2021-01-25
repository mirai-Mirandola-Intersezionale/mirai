import React from 'react'
import Link from 'next/link'

//Components


//Images

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
        <header className="w-full fixed flex flex-wrap items-center justify-between bg-opacity-0 text-white z-50">
            <div className="w-full p-4 flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <div className="cursor-pointer">
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
            "lg:flex flex-grow items-center lg:space-x-4  bg-red-500 lg:bg-opacity-0 lg:w-full lg:justify-end p-4" +
            (isNavbarOpen ? " flex" : " hidden")
            } >
                <div className="flex lg:flex-row flex-col lg:divide-x lg:divide-y-0 divide-y w-full">
                    <ul className="lg:space-x-4 lg:space-y-0 space-y-4 lg:flex-row flex-col list-none lg:text-left text-right">
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