import React from 'react'

export default function Footer(){
    return (
        <>
            <footer className="bg-gray-200">
                <small className="copyright text-center">&copy; Copyright 2021 - {new Date().getFullYear()}, Example Corporation</small>
            </footer>
        </>
    )
}
