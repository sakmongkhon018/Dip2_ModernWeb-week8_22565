import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'

const RootLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout