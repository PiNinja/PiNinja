import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import loadVizualization, {cycleVisualization} from "../../helpers/visualization"

import '../../styles/header.scss'
import "../../styles/background.scss"


const Header = () => {
    const isBrowser = typeof window !== 'undefined';
    const loadedVisualization = loadVizualization();
    const [expand,setExpand] = useState(false)
    const [visualization, setVisualization] =  useState(loadedVisualization)

    const mainDigits = ['3.',1,4,1,5,9]
    
    return (
        <>
            {isBrowser && <section id="background" className={visualization}></section>}
            <header>
                {isBrowser && <section className={visualization}>
                {mainDigits.map((d,i)=>(<div key={'MainDigit'+i} onClick={()=>setVisualization(cycleVisualization(visualization))}><p className={`digit${parseInt(d)}`}>{d}</p></div>))}
                </section>}
                <div id="burger" onClick={()=>setExpand(!expand)}>=</div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/tech">Technologies</Link></li>
                    </ul>
                </nav>
            </header>
            <aside className={expand?"expanded":undefined}>
                <div id="burger-menu" onClick={()=>setExpand(!expand)}>=</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/tech">Technologies</Link></li>
                </ul>
            </aside>
        </>
    )
}

export default Header