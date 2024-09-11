import React, { useState } from "react";
import './footerStyle.css'
import LogoBianco from '../../assets/images/Logos/Logo-trasparente.png'
import Payoff from '../../assets/images/SVG/payoff.svg'
import Instagram from '../../assets/images/SVG/icons8-instagram.svg'
import Linkedin from '../../assets/images/SVG/icons8-linkedin.svg'
import Facebook from '../../assets/images/SVG/icons8-facebook.svg'

const Footer = () => {
    return (
        <div className="w-full flex justify-center align-baseline underForm xxs:flex-col md:flex-row">
            <div className="flex flex-col w-2/16 justify-end xxs:justify-center xxs:items-center">
                <img src={LogoBianco} className="imgFooter"></img>
                <img src={Payoff} className="imgFooter -mt-20"></img>
            </div>
            <div className="flex flex-col w-2/12 mt-8 xxs:w-full">
                <h6>ITS ITALIA SPA</h6>
                <p>Via Fratta, 43 <br /> 31023 - Resana(TV) <br /> info.tv@jfk.group <br /> +39 0423 078023</p>
            </div>
            <div className="flex flex-col w-2/12 mt-8 xxs:w-full">
                <h6>CCZ INTERNATIONAL SRL</h6>
                <p>Via della Pace, 29/A <br /> 20098 - San Giuliano Milanese (MI) <br /> info.mi@jfk.group <br /> +39 02 5760 4900</p>
            </div>
            <div className="flex flex-col w-2/12 mt-8 xxs:w-full">
                <h6>DATUS SRL</h6>
                <p>Via Fratta, 43 <br /> 31023 - Resana(TV) <br /> vendite@datusitalia.it <br /> +39 0423 078281</p>
            </div>
            <div className="flex flex-col w-2/12 mt-8 xxs:w-full">
                <h6>SHANGAI JFK BEARING CO. LTD</h6>
                <p>Lane 111, Shi Hui Rd Building nr.1 <br /> Shangai, P.R. China <br /> info.cn@jfk.group <br /> +86 02157831069</p>
            </div>
            <div className="flex flex-col w-2/12 mt-8 xxs:w-full xxs:mb-6">
                <h6>SOCIAL</h6>
                <ul className="flex justify-center flex-col items-center">
                    <li className="flex items-center">
                        <a href="https://www.instagram.com/jfkgroup_eu/">
                            <img src={Instagram}></img>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/jfkgroup.eu">
                            <img src={Facebook}></img>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/company/jfkgroup/">
                            <img src={Linkedin}></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;