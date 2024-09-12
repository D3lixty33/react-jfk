import React from "react";
import './cardsStyle.css'
import ITS from '../../assets/images/Logos/ITS Italia.jpeg'
import CCZ from '../../assets/images/Logos/CCZ International.jpeg'
import JFK from '../../assets/images/Logos/JFK Bearing.jpeg'
import Datus from '../../assets/images/Logos/Datus.jpeg'



const Cards = () => {
    return (
        <div className="flex flex-row w-full h-96 mt-16 p-6 xxs:w-full xxs:flex-col md:flex-row">
            <div className="flex w-1/4 flex-col items-center cursor-pointer ITS xxs:w-full xxs:flex-col">
                <a href="https://itsitalia.org/;">
                    <img src={ITS} alt="404 error"></img>
                </a>
                <hr className="ml-4 mr-4"></hr>
                <a href="https://itsitalia.org/;">
                    <button className="btnPage mt-4">Scopri di più</button>
                </a>

            </div>
            <div className="flex w-1/4 flex-col items-center cursor-pointer CCZ xxs:w-full xxs:flex-col">
                <a href="https://cczinternational.it/;">
                    <img src={CCZ} alt="404 error"></img>
                </a>
                <hr className="ml-4 mr-4"></hr>
                <a href="https://cczinternational.it/;">
                    <button className="btnPage mt-4">Scopri di più</button>
                </a>
            </div>
            <div className="flex w-1/4 flex-col items-center cursor-pointer JFK xxs:w-full xxs:flex-col">
                <a href="https://jfkbearing.cn/">
                    <img src={JFK} alt="404 error"></img>
                </a>
                <hr className="ml-4 mr-4"></hr>
                <a href="https://jfkbearing.cn/">
                    <button className="btnPage mt-4">Scopri di più</button>
                </a>
            </div>
            <div className="flex w-1/4 flex-col items-center cursor-pointer DATUS xxs:w-full xxs:flex-col">
                <a href="https://www.datusitalia.com/it/">
                    <img src={Datus} alt="404 error"></img>
                </a>
                <hr className="ml-4 mr-4"></hr>
                <a href="https://www.datusitalia.com/it/">
                    <button className="btnPage mt-4">Scopri di più</button>
                </a>
            </div>
        </div>
    )
}

export default Cards;