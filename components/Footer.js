import React from 'react'

export default function Footer(){
    return (
        <>
            <footer className="bg-gray-200 p-4">
                <p className="copyright text-center text-sm">&copy; Copyright 2021 - {new Date().getFullYear()}, Example Corporation</p>
            </footer>
        </>
    )
}
