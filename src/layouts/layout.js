import React from "react"
import SEO from './../component/SEO/SEO'
import Header from './../component/header/Header'

import '../styles/main.scss'

const Layout = (props) => (
    <>
        <SEO />
        <Header/>
        {props.children}
    </>
)

export default Layout