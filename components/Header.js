import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Components


//Images

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
        <nav className="w-full flex flex-wrap items-center justify-between p-4 navbar-expand-lg bg-red-500 text-white z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between relative">
            <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                <Link
                className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
                href="/"
                >
                    {/* <b className="text-2xl">mirai</b> */}
                    <Image src="/img/m.svg" alt="M" width={60} height={38} className="cursor-pointer"/>
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
                (isNavbarOpen ? "flex absolute top-full right-3 p-6 rounded-md shadow-md bg-red-500 z-50 animate-grow" : " hidden")
                }
                id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-4 lg:space-y-0 space-y-4 lg:pr-4 text-right lg:text-left">
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
                    
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}