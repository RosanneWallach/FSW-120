import React from 'react'

import './myStyles.css'

function Stylesheet() {
    return (
        <div>
            <h3 className="navbar"> Hi!</h3>
        </div>
    )
}

export default Stylesheet

import React from "react"

function Question(props) {
    return (
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.punchline}</h3>
        </div>
    )
}

export default Question

import React from "react"

function Header() {
    return (
        <header className="navbar">Question?</header>
    )
}

export default Header

import React from "react"
import Stylessheet from "./Stylesheets"
import Header from "./Header"

function App() {
    return (
        <div>
            <Header />
            <Stylessheet />
        </div>
    )
}

export default App