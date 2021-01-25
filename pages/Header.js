import React from 'react'
import Link from 'next/link'

//Components


//Images

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
        <header className="w-full flex flex-row justify-between text-white bg-opacity-0 fixed items-center max-w-7xl mx-auto px-4 sm:px-6 border-b-32 py-6 md:space-x-10">
            <div className="logo">
                <Link href="/" alt="Home"><b className="text-2xl">mirai</b></Link>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <img src={isNavbarOpen ? 'https://s2.svgbox.net/hero-outline.svg?ic=x&color=ffffff' : 'https://s2.svgbox.net/hero-outline.svg?ic=menu&color=ffffff'} width="28" height="28"/>
            </button>
            
            <div
                className={
                "lg:flex items-center" +
                (isNavbarOpen ? " flex" : " hidden")
                }
            >
                <nav className=" space-x-4 flex flex-row items-center divide-x">
                    <ul className=" space-x-4 flex flex-row ">
                        <li><Link href="/Impara">Impara</Link></li>
                        <li><Link href="/Trova">Trova</Link></li>
                        <li><Link href="/Contatti">Contatti</Link></li>
                    </ul>
                    <ul className="social-links space-x-4 flex flex-row pl-4">
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
                </nav>
          </div>
        </header>
        </>
    )
}