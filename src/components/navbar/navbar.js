import React, { useState } from "react";
import './style.css'

const Navbar = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" placeholder="none" title="test" />
            <label className="menu__btn" for="menu__toggle" id="mn_1">
                <span id="btnNavbar"></span>
            </label>

            <ul className="menu__box">
                <label className="menu__btn" for="menu__toggle" id="mn_2">
                    <span></span>
                </label>
                <a className="menu__item" href="#whatWeDo_Scroll">Home</a>
                <a className="menu__item" href="#aboutScroll">About Us</a>
                <a className="menu__item" href="#scrollNews">News</a>
                <a className="menu__item" href="#underForm_Scroll">Contact Us</a>
            </ul>
        </div>
    )
}

export default Navbar;