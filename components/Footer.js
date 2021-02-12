import React from 'react'

export default function Footer(){
    return (
        <>
            <footer className="">
                <small className="copyright">&copy; Copyright 2021 - {new Date().currentYear()}, Example Corporation</small>
            </footer>
        </>
    )
}