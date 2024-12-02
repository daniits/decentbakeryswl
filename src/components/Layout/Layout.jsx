import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import TopNav from './TopNav/TopNav'

const Layout = ({ children }) => {
    return (
        <>
            <TopNav />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
