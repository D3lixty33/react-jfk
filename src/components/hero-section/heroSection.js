import React from "react";
import { useState } from "react";
import {ReactComponent as JFKSVG} from '../../assets/images/SVG/img-scritta.svg'



const HeroSection = () => {

    // Here add the dynamic and logical side of the component then render the result inside the component itself

    return (
        <div className="flex w-full h-auto flex-row mt-9 items-center xxs:flex-col md:flex-row xxs:w-full">
            <div className="w-6/12 h-auto flex justify-center xxs:w-full">
                <JFKSVG className="object-contain max-h-60 justify-center align-middle"></JFKSVG>
            </div>
            <div className="w-6/12 h-auto text-start p-4 align-middle xxs:w-full xxs:p-6 xxs:text-center md:text-start">
                <h5 className="mb-3 text-base">COSA FACCIAMO</h5>
                <h3 className="mb-3 text-3xl font-medium xxs:text-xl md:text-3xl">Specializzati nel settore dei componenti meccanici di precisione</h3>
                <p className="text-base">Da oltre 20 anni, boccole, cuscinetti a sfera e a rullini, guide lineari, spessori metallici, teste a snodo rappresentano il nostro pane quotidiano. Grazie alla nostra vasta gamma di prodotti certificati e di qualità siamo in grado di rispondere in maniera puntuale e attenta alle esigenze dei clienti provenienti da diversi settori.
                </p>
            </div>
        </div>
    )
}

export default HeroSection;