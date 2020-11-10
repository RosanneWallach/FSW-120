import React, { Component } from "react"

export default class Header extends Component {
    render () {
        return (
            <div className = "Header">
                <ul>
                <li> <a href="Home">Home</a></li>
                <li> <a href="Contact">Contact</a></li>
                    <li> <a href="About">About</a></li>
                    <li> <a href="Enter">Enter</a></li>
                </ul>
            </div>
        );
    }
}


import React, {Component} from 'react';

import "./App.css";

import Cards from "./Component/Cards";

import Header from "./Component/Header";

import cardsData from './Component/cardsData';

import Footer from "./Component/Footer";

import Spot from "./Component/Spot";

import "./style.css";

function App() {
    const cardsCompponents = cardsData.map(cards => <Cards place={cards.place} price={cards.price} timeToGo={cards.timeToGo} />)
        return (
            <div className = "App">
                <Header/>
                <Cards/>
                {cardsCompponents}
            </div>


        );
    }

export default App;

import React from "react"

function Cards(props) {
    return (
        <div>
            <h3 styles={{color: !props.place && "#32CD32"}}>Place: {props.place}</h3>
            <h3 styles={{color: !props.price && "#FFFFFF"}}>Price: {props.price}</h3>
            <h3 styles={{color: !props.timeToGo && "#32CD32"}}>timeToGo: {props.timeToGo}</h3>
            <hr/>
        </div>
    )
}

export default Cards

import React from "react"

function Spot(props) {
    const styles = {
        backgroundColor: props.spotColor,
        height: 0,
        width: 0
    }

    return (
        <div styles={styles}></div>
    )
}

export default Spot

const cardsData = [
    {
        place: "Maridian, Idaho",
        image: "https://image.shutterstock.com/image-vector/country-canada-travel-vacation-places-600w-1038867628.jpg",
        price: 40,
        timeToGo: "Spring"
    },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    },{
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    },{
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    },{
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
]

export default cardsData














import React, {Component} from "react"

export default class Footer extends Component {
    render () {
        return (
            <div className = "Footer">
                <p>Vactaion!</p>
            </div>
        );
    }
}