import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, closeOutline, menuOutline } from 'ionicons/icons';

function Navigation() {
    const [showNavigation, setShowNavigation] = useState(window.innerWidth >= 1150);
    const [showPerson, setShowPerson] = useState(window.innerWidth >= 1150);

    useEffect(() => {
        const handleResize = () => {
            setShowNavigation(window.innerWidth >= 1150);
            setShowPerson(window.innerWidth >= 1150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNavigation = () => {
        setShowNavigation(!showNavigation);
        if (!showNavigation) {
            document.body.style.overflow = 'hidden'; // Görgetés letiltása
        } else {
            document.body.style.overflow = ''; // Görgetés engedélyezése
        }
    };

    const closeNavigation = () => {
        setShowNavigation(false);
        document.body.style.overflow = ''; // Görgetés engedélyezése, ha bezártuk a navigációt
    };

    return (
        <>
            {showNavigation ? (
                <div className="header-box" id="header">
                    <div className="header-left-side">
                        {
                         showPerson &&   
                            <IonIcon className='icon' icon={personOutline}></IonIcon>
                        }
                    </div>
                    <div className="header-right-side">
                        <div className="header-button-list-box">
                            <ul className="header-button-list">
                                <li className="header-button-list-item">
                                    <a href="#experience" className='nav-link-button' onClick={closeNavigation}>
                                        <span className="green">01.</span> 
                                        &nbsp; Experience
                                    </a>
                                </li>
                                <li className="header-button-list-item">
                                    <a href="#skills" className='nav-link-button' onClick={closeNavigation}>
                                        <span className="green">02.</span>
                                        &nbsp; Skills
                                    </a>
                                </li>
                                <li className="header-button-list-item">
                                    <a href="#projects" className='nav-link-button' onClick={closeNavigation}>
                                        <span className="green">03.</span>
                                        &nbsp; Projects
                                    </a>
                                </li>
                                <li className="header-button-list-item">
                                    <a href="#contact" className='nav-link-button' onClick={closeNavigation}>
                                        <span className="green">04.</span>
                                        &nbsp; Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {
                        !showPerson &&
                    <IonIcon className='menu' onClick={toggleNavigation} icon={closeOutline}></IonIcon>
                    }
                </div>
            ) : (
                    !showPerson &&
                    <IonIcon className='menu' onClick={toggleNavigation} icon={menuOutline}></IonIcon>
                
            )}
        </>
    );
}

export default Navigation;
