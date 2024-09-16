import React, { useState } from "react";
import CCZIso from '../../assets/images/News/ISO-9001.jpg'
import RedSea from '../../assets/images/News/MarRosso.jpg'
import SpessoriMetallici from '../../assets/images/News/SpessoriMetallici.jpg'

// ISO 9001 = https://cczinternational.it/ccz-international-e-certificata-iso-9001/
// Mar Rosso = https://itsitalia.org/la-crisi-del-mar-rosso-e-il-suo-impatto-sui-traffici-commerciali/
// Spessori metallici = https://cczinternational.it/spessori-metallici-un-prodotto-versatile-ed-efficiente/

const News = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center" id="scrollNews">
            <h2 className="text-3xl font-medium mb-2">ULTIME NEWS</h2>
            <p className="text-base font-normal ">JFK Journal</p>
            <div className="flex flex-row items-center justify-center w-full mt-16 xxs:flex-col md:flex-row xxs:w-full">
                <div className="w-1/3 flex flex-col justify-center items-center cursor-pointer xxs:w-full md:w-1/3 xxs:mb-10">
                    <a href="https://cczinternational.it/ccz-international-e-certificata-iso-9001/">
                        <img src={CCZIso} className="object-contain" alt="404 Error"></img>
                    </a>
                    <hr className="mt-4 mb-4"></hr>
                    <h5 className="text-xl font-medium mb-8">CCZ International è certificata <br /> ISO 9001 </h5>
                    <a href="https://cczinternational.it/ccz-international-e-certificata-iso-9001/">
                        <button className="btnPage">Scopri di più</button>
                    </a>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center cursor-pointer xxs:w-full md:w-1/3 xxs:mb-10">
                    <a href="https://itsitalia.org/la-crisi-del-mar-rosso-e-il-suo-impatto-sui-traffici-commerciali/">
                        <img src={RedSea} className="object-contain" alt="404 Error"></img>
                    </a>
                    <hr className="mt-4 mb-4"></hr>
                    <h5 className="text-xl font-medium mb-8">La crisi del Mar Rosso e il suo impatto <br /> sui traffici commerciali</h5>
                    <a href="https://itsitalia.org/la-crisi-del-mar-rosso-e-il-suo-impatto-sui-traffici-commerciali/">
                        <button className="btnPage">Scopri di più</button>
                    </a>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center cursor-pointer xxs:w-full md:w-1/3 xxs:mb-10">
                    <a href="https://cczinternational.it/spessori-metallici-un-prodotto-versatile-ed-efficiente/">
                        <img src={SpessoriMetallici} className="object-contain" alt="404 Error"></img>
                    </a>
                    <hr className="mt-4 mb-4"></hr>
                    <h5 className="text-xl font-medium mb-8">Spessori metallici: <br /> un prodotto versatile ed efficiente </h5>
                    <a href="https://cczinternational.it/spessori-metallici-un-prodotto-versatile-ed-efficiente/">
                        <button className="btnPage">Scopri di più</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default News