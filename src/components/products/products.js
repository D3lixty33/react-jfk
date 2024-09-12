import React from "react";
import Boccole from '../../assets/images/Prodotti/Boccole.webp';
import CuscinettiRullini from '../../assets/images/Prodotti/Cuscinetti-Rullini.webp'
import Elastopal from '../../assets/images/Prodotti/Elastopal.webp'
import CuscinettiSfere from '../../assets/images/Prodotti/Cuscinetti-Sfere.webp'
import Ghiere from '../../assets/images/Prodotti/Ghiere.webp'
import ProdottiTecnoplastici from '../../assets/images/Prodotti/Prodotti-Tecnoplastici.webp'
import Rondelle from '../../assets/images/Prodotti/Rondelle.webp'
import SistemiLineari from '../../assets/images/Prodotti/Sistemi-Lineari.webp'
import Snodi from '../../assets/images/Prodotti/Snodi-Teste-Snodo.webp'
import Spessori from '../../assets/images/Prodotti/Spessori-Metallici-Centesimali.webp'
import Viteria from '../../assets/images/Prodotti/Viteria-Bulloneria.webp'

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
                    <img src={Boccole} alt="404 Error"></img>
                    <p>Boccole</p>
                </div>
                <div style={positionTwo} className="item">
                    <img src={CuscinettiRullini} alt="404 Error"></img>
                    <p>Cuscinetti a rullini</p>
                </div>
                <div style={positionThree} className="item">
                    <img src={Elastopal} alt="404 Error"></img>
                    <p>Elastopal</p>
                </div>
                <div style={positionFour} className="item">
                    <img src={CuscinettiSfere} alt="404 Error"></img>
                    <p>Cuscinetti a sfere</p>
                </div>
                <div style={positionFive} className="item">
                    <img src={Ghiere} alt="404 Error"></img>
                    <p>Ghiere</p>
                </div>
                <div style={positionSix} className="item">
                    <img src={ProdottiTecnoplastici} alt="404 Error"></img>
                    <p>Prodotti tecnoplastici</p>
                </div>
                <div style={positionSeven} className="item">
                    <img src={Rondelle} alt="404 Error"></img>
                    <p>Rondelle</p>
                </div>
                <div style={positionEight} className="item">
                    <img src={SistemiLineari} alt="404 Error"></img>
                    <p>Sistemi lineari</p>
                </div>
                <div style={positionNine} className="item">
                    <img src={Snodi} alt="404 Error"></img>
                    <p>Snodi e teste a snodo</p>
                </div>
                <div style={positionTen} className="item">
                    <img src={Spessori} alt="404 Error"></img>
                    <p>Spessori metallici centesimali</p>
                </div>
                <div style={positionEleven} className="item">
                    <img src={Viteria} alt="404 Error"></img>
                    <p>Viteria e bulloneria</p>
                </div>

            </div>
        </div>
    )
}

export default Slider;