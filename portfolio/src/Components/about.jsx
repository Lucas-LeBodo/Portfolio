import React, { useState, useEffect, Fragment } from "react";
import { GoMarkGithub } from "react-icons/go";
import {FaLinkedin} from "react-icons/fa";
import gsap from 'gsap';


// Images 
import me from '../img/lucas-epitech.jpg';


function AboutComponents() {

    useEffect(() => {
        gsap.from("#about", {x: "-150%", duration:1.7, opacity:1});
    }, []);
    return(
        <Fragment>
            <div id={'about'}>
                <div id={'about-picture'}><img src={me} alt="me" /></div>
                <div id={'about-info'}>
                    <h1>Lucas Le Bodo</h1>
                    <h2>Intégrateur/Développeur web Fullstack</h2>
                    <p>Je suis <span id={'color'}>Lucas Le Bodo</span> et j'ai 19ans.<br />
                       Actuellement étudiant à la <a href="https://www.webacademie.org/">Web@cademie</a> de Nantes, je suis une formation sur 2ans pour devenir Intégrateur/Développeur web fullStack.<br /><br />
                       Je recherche actuellement alternance à partir du 27 septembre 2021 au 18 novembre 2022.
                    </p>
                </div>
                <div id={'about-button'}>
                    <div className={'github-btn'}>
                        <a href="https://github.com/Lucas-LeBodo"><GoMarkGithub/> GitHub</a>
                    </div>
                    <div className={'linkedin-btn'}>
                        <a href="https://www.linkedin.com/in/lucas-le-bodo/"><FaLinkedin/> Linkedin</a>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default AboutComponents;