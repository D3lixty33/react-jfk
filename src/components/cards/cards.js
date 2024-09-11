import React, { useState } from "react";
import './cardsStyle.css'
import ITS from '../../assets/images/Logos/ITS Italia.png'
import CCZ from '../../assets/images/Logos/CCZ International.png'
import JFK from '../../assets/images/Logos/JFK Bearing.png'
import Datus from '../../assets/images/Logos/Datus.png'

const Cards = () => {
    return (
        <div className="flex flex-row w-full h-96 mt-16 p-6">
            <div className="flex w-1/4 flex-col items-center cursor-pointer ITS">
                <img src={ITS}></img>
                <hr className="ml-4 mr-4"></hr>
                <button className="btnPage mt-4">Scopri di più</button>
            </div>
            <div className="flex w-1/4 flex-col items-center cursor-pointer CCZ">
                <img src={CCZ}></img>
                <hr className="ml-4 mr-4"></hr>
                <button className="btnPage mt-4">Scopri di più</button>
            </div>
            <div className="flex w-1/4 flex-col items-center cursor-pointer JFK">
                <img src={JFK}></img>
                <hr className="ml-4 mr-4"></hr>
                <button className="btnPage mt-4">Scopri di più</button>
            </div>
            <div className="flex w-1/4 flex-col items-center cursor-pointer DATUS">
                <img src={Datus}></img>
                <hr className="ml-4 mr-4"></hr>
                <button className="btnPage mt-4">Scopri di più</button>
            </div>
        </div>
    )
}

export default Cards;