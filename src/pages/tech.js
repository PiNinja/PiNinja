import React from "react"
import Layout from '../layouts/layout'

export default () => (
    <Layout>
        <main className="multiple">
            <article>
                <h1><strong>React</strong> - 90%</h1>
                <ul className="sub">
                    <li className="ok">Hooks</li>
                    <li className="ko">tests</li>
                </ul>
            </article>
            <article>
                <h1><strong>GraphQL</strong> - 50%</h1>
                <ul className="sub">
                    <li className="ok">Schema</li>
                    <li className="ok">Custom rules</li>
                    <li className="ok">Authentification</li>
                    <li className="ko">tests</li>
                </ul>
            </article>
            <article>
                <h1><strong>A-frame</strong> - 25%</h1>
                <ul className="sub">
                    <li className="ok">basics</li>
                    <li className="ko">Import custom model</li>
                    <li className="ko">fetch API data</li>
                    <li className="ko">Interractions</li>
                    <li className="ko">Multiplayer</li>
                </ul>
            </article>
            <article>
                <h1><strong>Parser</strong> - 15%</h1>
                <ul className="sub">
                    <li className="ok">Schema</li>
                    <li className="ko">Custom functions</li>
                    <li className="ko">NPM package</li>
                    <li className="ko">tests</li>

                </ul>
            </article>
        </main>
    </Layout>
)