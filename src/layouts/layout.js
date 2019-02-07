import React from "react"
import SEO from './../component/SEO/SEO'
import DigitsOfPi from './../component/backgrounds/DigitsOfPi'
import Header from './../component/header/Header'

import '../styles/main.scss'

const Layout = (props) => (
    <>
        <SEO />
        <DigitsOfPi />
        <Header/>
        {props.children}
    </>
)

export default Layout