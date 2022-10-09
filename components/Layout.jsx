import React from 'react'
import Head from "next/head";

const Layout = (props) => {
    return (
        <>
        <header>
            <h1>Place for fun</h1>
        </header>
        {props.children}
        <footer>
            <a href="https://github.com/normal64">By Denis Poplavskii</a>
            </footer>  
        </>
    )
}

export default Layout
