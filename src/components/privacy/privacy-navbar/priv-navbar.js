import React from "react";
import ITS from '../../../assets/images/Logos/Logo-blu.jpg'
import './style.css'
import { Link } from "react-router-dom";

const PrivNavbar = () => {
    return (
        <div className="w-full flex flex-row xxs:flex-col md:flex-row">
            <div className="flex max-w-32">
                <img src={ITS} alt="404 Error" className="object-contain"></img>
            </div>
            <div className="flex w-full justify-end mr-8 mt-12 text-xl">
                <ul className="block items-center">
                    <li className="inline mr-6 liNav">
                        <Link to={'/'} className="hover:text-sky-500">
                            Home
                        </Link>
                    </li>
                    <li className="inline mr-6 liNav">About Us</li>
                    <li className="inline mr-6 liNav">News</li>
                    <li className="inline">
                        <button className="text-white btnPrivacy p-1.5">Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PrivNavbar;