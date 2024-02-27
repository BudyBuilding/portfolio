import React from 'react';
import Button from "../Reusable-components/Button";
import profilepic from '../../img/profile-pic.jpg';

function Hero({handleDownload}) {
    return (
        <div className='rel'>
            <div className="land-page" id="landpage">
                <div className="text-box">
                    <p className="salute-text green">Hi, my name is</p>
                    <p className="name-text">Szilveszter, Nyeste</p>
                    <p className="main-title landpage-m-title">I build things for the web</p>
                    <p className="description main-desc">A passionate front-end developer with a keen eye for design and a love for creating seamless user experiences. Welcome to my portfolio, where I showcase my skills, projects, and the journey of turning ideas into interactive and visually appealing web applications.</p>
                    <div className='buttons'>
                        <a href="#contact">
                            <Button text="Contact"/>
                        </a>
                        <Button text="Download the CV" onClick={handleDownload}/>
                    </div>
                </div>
                <div className='img-box'>
                    <img src={profilepic} className='img' alt="profile"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;
