import React from "react";
import PrivNavbar from "./privacy-navbar/priv-navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEye
} from '@fortawesome/free-solid-svg-icons';
import Footer from "../footer/footer";

const PrivacyPage = () => {
    return (
        <div className="w-full">
            <PrivNavbar />

            <div className="flex w-full flex-col text-start mt-8 ml-8">
                <h1 className="text-5xl font-medium text-[rgb(26,69,104)]">Informative</h1>
                <div className="mt-8 flex-col flex">
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Policy di gestione dei diritti interessato</p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Modelli di gestione dei diritti interessato</p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Informativa privacy generale ex art. 13 del Regolamento (UE) </p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Privacy Policy e Cookie Policy per i dati raccolti attraverso il sito web</p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Informativa per invio spontaneo di Curricula personali (viatea, studiorum et laboris)</p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Informativa per la privacy relativa all'impianto di videosorveglianza ai sensi art.13 Regolamento EU 679/2016</p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Informativa whistleblowing</p>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="flex w-full mb-4 mt-4 items-center text-base font-normal  hover:text-sky-500">
                        <FontAwesomeIcon icon={faEye} />
                        <p className="ml-2 text-2xl">Informativa MOGCN-GEN</p>
                    </div>
                </div>
            </div>
            <div className="h-40"></div>
            <Footer />
        </div>
    )
}

export default PrivacyPage;