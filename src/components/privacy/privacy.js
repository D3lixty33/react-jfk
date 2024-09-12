import React from "react";
import { Link } from 'react-router-dom';
import './privacyStyle.css'

const Privacy = () => {
    return (
        <div className="flex flex-row w-full h-16 justify-center privacy mt-px">
            <Link to={'./privacy-page'} className="mt-4 text-white ">
                <div className="flex flex-row">
                    <p className="hover:text-sky-500"> Privacy &nbsp;</p>|<p className="hover:text-sky-500">&nbsp; Cookie Policy</p>
                </div>
            </Link>
        </div>
    )
}

export default Privacy;