import React from "react"
import Layout from './../layouts/layout'
import '../styles/projects.scss'

export default () => (
    <Layout>
        <main className="multiple">
            <article>
                <h1><strong>Anthologia</strong> - Undisclosed</h1>
                <ul className="technologies">
                    <li className="lot">A-Frame</li>
                    <li className="lot">WebVR</li>
                    <li className="medium">3dsMax</li>
                    <li className="medium">React</li>
                    <li className="medium">GraphQL</li>
                </ul>
            </article>
            <article>
                <h1><strong>JSONGraph</strong> - Undisclosed</h1>
                <ul className="technologies">
                    <li className="lot">Parser</li>
                    <li className="lot">Javascript</li>
                    <li className="medium">Service Workers</li>
                    <li className="medium">GraphQL</li>
                </ul>
            </article>
            <article>
                <h1><strong>Questie</strong> - Undisclosed</h1>
                <ul className="technologies">
                    <li className="lot">GraphQL</li>
                    <li className="lot">JSONGraph</li>
                    <li className="medium">Service Workers</li>
                    <li className="medium">WebWorkers</li>
                    <li className="medium">Tensorflow.js</li>
                    <li className="medium">React</li>
                    <li className="light">Docker</li>
                </ul>
            </article>
        </main>
    </Layout>
)
