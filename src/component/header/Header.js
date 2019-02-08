import React, { useState } from "react"
import { Link } from "gatsby"
import '../../styles/header.scss'
import "../../styles/background.scss"

const cycleVisualization = (current) =>{
    if(current === 'square'){
        localStorage.setItem('visualization', 'Krzywinski');
        return 'Krzywinski'
    }
    else if(current === 'Krzywinski'){
        localStorage.setItem('visualization', 'square');
        return 'square'
    }
    return 'square'
}

const Header = (props) => {
    const loadedVisualization = localStorage.getItem('visualization') || 'square'
    const [expand,setExpand] = useState(false)
    const [visualization, setVisualization] =  useState(loadedVisualization)
    const mainDigits = ['3.',1,4,1,5,9]
    
    return (
        <>
            <section id="background" className={visualization}></section>
            <header>
                <section className={visualization}>
                {mainDigits.map((d,i)=>(<div key={'MainDigit'+i} onClick={()=>setVisualization(cycleVisualization(visualization))}><p className={`digit${parseInt(d)}`}>{d}</p></div>))}
                </section>
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