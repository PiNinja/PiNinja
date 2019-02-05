import React from "react"
import SEO from './../component/SEO/SEO'
import DigitsOfPi from './../component/backgrounds/DigitsOfPi'

const Layout = (props) => (
    <>
        <SEO />
        <DigitsOfPi />
        {props.children}
    </>
)

export default Layout