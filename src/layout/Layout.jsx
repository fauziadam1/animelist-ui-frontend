import Navbar from "../components/navbar.view";
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <Navbar>
                <main>
                    {children}
                </main>
            </Navbar>
        </>
    )
}
