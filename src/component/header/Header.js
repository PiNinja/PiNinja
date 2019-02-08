import React, { useState } from "react"
import '../../styles/header.scss'
import "../../styles/background.scss"

const cycleVisualization = (current) =>{
    if(current === 'square'){
        return 'Krzywinski'
    }
    else if(current === 'Krzywinski'){
        return 'square'
    }
    return 'square'
}

const Header = (props) => {

    const [expand,setExpand] = useState(false)
    const [visualization, setVisualization] =  useState('square')
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/tech">Technologies</a></li>
                    </ul>
                </nav>
            </header>
            <aside className={expand?"expanded":undefined}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/tech">Technologies</a></li>
                </ul>
            </aside>
        </>
    )
}

export default Header