import React, { useState } from "react";
import Boccole from '../../assets/images/Prodotti/Boccole.png';
import CuscinettiRullini from '../../assets/images/Prodotti/Cuscinetti-Rullini.png'
import Elastopal from '../../assets/images/Prodotti/Elastopal.png'
import CuscinettiSfere from '../../assets/images/Prodotti/Cuscinetti-Sfere.png'
import Ghiere from '../../assets/images/Prodotti/Ghiere.png'
import ProdottiTecnoplastici from '../../assets/images/Prodotti/Prodotti-Tecnoplastici.png'
import Rondelle from '../../assets/images/Prodotti/Rondelle.png'
import SistemiLineari from '../../assets/images/Prodotti/Sistemi-Lineari.png'
import Snodi from '../../assets/images/Prodotti/Snodi-Teste-Snodo.png'
import Spessori from '../../assets/images/Prodotti/Spessori-Metallici-Centesimali.png'
import Viteria from '../../assets/images/Prodotti/Viteria-Bulloneria.png'

import './productsStyle.css'

const quantity = {
    "--quantity": 11
};
const positionOne = {
    "--position": 1
}
const positionTwo = {
    "--position": 2
}
const positionThree = {
    "--position": 3
}
const positionFour = {
    "--position": 4
}
const positionFive = {
    "--position": 5
}
const positionSix = {
    "--position": 6
}
const positionSeven = {
    "--position": 7
}
const positionEight = {
    "--position": 8
}
const positionNine = {
    "--position": 9
}
const positionTen = {
    "--position": 10
}
const positionEleven = {
    "--position": 11
}


const Slider = () => {
    return (
        <div className="banner">
            <div className="slider" style={quantity} >
                <div className="item" style={positionOne}>
                    <img src={Boccole}></img>
                    <p>Boccole</p>
                </div>
                <div style={positionTwo} className="item">
                    <img src={CuscinettiRullini}></img>
                    <p>Cuscinetti a rullini</p>
                </div>
                <div style={positionThree} className="item">
                    <img src={Elastopal}></img>
                    <p>Elastopal</p>
                </div>
                <div style={positionFour} className="item">
                    <img src={CuscinettiSfere}></img>
                    <p>Cuscinetti a sfere</p>
                </div>
                <div style={positionFive} className="item">
                    <img src={Ghiere}></img>
                    <p>Ghiere</p>
                </div>
                <div style={positionSix} className="item">
                    <img src={ProdottiTecnoplastici}></img>
                    <p>Prodotti tecnoplastici</p>
                </div>
                <div style={positionSeven} className="item">
                    <img src={Rondelle}></img>
                    <p>Rondelle</p>
                </div>
                <div style={positionEight} className="item">
                    <img src={SistemiLineari}></img>
                    <p>Sistemi lineari</p>
                </div>
                <div style={positionNine} className="item">
                    <img src={Snodi}></img>
                    <p>Snodi e teste a snodo</p>
                </div>
                <div style={positionTen} className="item">
                    <img src={Spessori}></img>
                    <p>Spessori metallici centesimali</p>
                </div>
                <div style={positionEleven} className="item">
                    <img src={Viteria}></img>
                    <p>Viteria e bulloneria</p>
                </div>

            </div>
        </div>
    )
}

export default Slider;