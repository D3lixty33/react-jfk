import React, { useState } from "react";
import { ReactComponent as imgDinamica } from '../../assets/images/Immagini dinamiche/Img-dinamica1.webp';
import './underStyle.css'


const UnderHero = () => {
    return (
        <div className="flex w-full h-auto underHeroImg flex-col text-white justify-center text-start">
            <div className="flex w-6/12 h-6/12 ml-36">
                <h1 className="text-5xl font-semibold pb-2">La nostra mission</h1>
            </div>
            <div className="flex w-6/12 h-6/12 ml-36 pt-2 text-base font-normal">
                Superare le aspettative delle aziende che si affidano a noi, <br/>
                garantendo un servizio preciso ed efficiente.<br/>
                Con la passione e la competenza che ci contraddistinguono
            </div>
        </div>
    )
}

export default UnderHero;