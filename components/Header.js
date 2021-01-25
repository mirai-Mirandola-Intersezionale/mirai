import React from 'react'
import Link from 'next/link'

//Components


//Images

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
        <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-red-500 mb-3 text-white z-50">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                <Link
                className="cursor-pointer leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
                href="/"
                >
                    <b className="text-2xl">mirai</b>
                </Link>

                <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                >
                    <img src={isNavbarOpen ? 'https://s2.svgbox.net/hero-outline.svg?ic=x&color=ffffff' : 'https://s2.svgbox.net/hero-outline.svg?ic=menu&color=ffffff'} width="28" height="28"/>
                </button>

            </div>
            <div
                className={
                "lg:flex flex-grow flex-col lg:flex-row items-end lg:divide-x lg:divide-y-0 divide-y" +
                (isNavbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-4 lg:space-y-0 space-y-4 lg:pr-4">
                    <li className="nav-item">
                        <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href="/Impara"
                        >
                        Impara
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href="/Trova"
                        >
                        Trova
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href="/Contatti"
                        >
                        Contatti
                        </Link>
                    </li>
                </ul>
                <ul className="social-links space-x-4 flex flex-row pl-4 pt-2 lg:pt-0">
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
            </div>
        </nav>
        </>
    )
}