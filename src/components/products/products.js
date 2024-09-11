import React, { useState } from "react";
import Boccole from '../../assets/images/Prodotti/Boccole.png'

const quantity = {
    "--quantity": 11
};
const positionOne = {
    "--position" : 1
}
const positionTwo = {
    "--position" : 1
}
const positionThree = {
    "--position" : 1
}
const positionFour = {
    "--position" : 1
}
const positionFive = {
    "--position" : 1
}
const positionSix = {
    "--position" : 1
}
const positionSeven = {
    "--position" : 1
}
const positionEight = {
    "--position" : 1
}
const positionNine = {
    "--position" : 1
}
const positionTen = {
    "--position" : 1
}
const positionEleven = {
    "--position" : 1
}


const Slider = () => {
    return (
        <div className="banner">
            <div className="slider" style={quantity} >
                <div className="item" style={positionOne}>
                    <img src={Boccole}></img>
                    <p>Boccole</p>
                </div>
                <div className="item" style={positionTwo}>
                </div>
                <div className="item" style={positionThree}>
                </div>
                <div className="item" style={positionFour}>
                </div>
                <div className="item" style={positionFive}>
                </div>
                <div className="item" style={positionSix}>
                </div>
                <div className="item" style={positionSeven}>
                </div>
                <div className="item" style={positionEight}>
                </div>
                <div className="item" style={positionNine}>
                </div>
                <div className="item" style={positionTen}>
                </div>
                <div className="item" style={positionEleven}>
                </div>

            </div>
        </div>
    )
}

export default Slider;