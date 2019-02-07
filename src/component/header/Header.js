import React, { useState } from "react"
import '../../styles/header.scss'

const Header = (props) => {

    const [expand,setExpand] = useState(false)

    return (
        <header className={expand?"expanded":false}>
            <div id="burger" onClick={()=>setExpand(!expand)}>=</div>
            <nav>
                <ul>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#tech">Technologies</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header