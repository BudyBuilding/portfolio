import React from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline } from 'ionicons/icons';

function Navigation() {
    return (
        <div className="header-box" id="header">
            <div className="header-left-side"> 
                <IonIcon className='icon' icon={personOutline}></IonIcon>
            </div>
            <div className="header-right-side">
                <div className="header-button-list-box">
                    <ul className="header-button-list">
                        <li className="header-button-list-item">
                            <a href="#experience" className='nav-link-button'>
                                <span className="green">01.</span> 
                                &nbsp; Experience
                            </a>
                        </li>
                        <li className="header-button-list-item">
                            <a href="#skills" className='nav-link-button'>
                                <span className="green">02.</span>
                                &nbsp; Skills
                            </a>
                        </li>
                        <li className="header-button-list-item">
                            <a href="#projects" className='nav-link-button'>
                                <span className="green">03.</span>
                                &nbsp; Projects
                            </a>
                        </li>
                        <li className="header-button-list-item">
                            <a href="#contact" className='nav-link-button'>
                                <span className="green">04.</span>
                                &nbsp; Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
