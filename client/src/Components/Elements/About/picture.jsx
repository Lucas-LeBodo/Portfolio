// Import Libs 
import React, { Fragment, useEffect } from "react";
import gsap from 'gsap';

import photo from '../../../Assets/Img/lucaslebodo.jpg';
import TextAbout from './textAbout';    

const Picture = ( ) => {

    useEffect(() => {
        gsap.from(".cadre-img", {x: "-150%", duration:3.5, opacity:1});
    }, []);

    return (
        <Fragment>
            <div className="cadre-img">
                <div className="about-content">
                    <img src={photo} alt="Photo de Lucas Le Bodo" />
                    <TextAbout />
                </div>
            </div>
        </Fragment>
    )
} 
export default Picture;