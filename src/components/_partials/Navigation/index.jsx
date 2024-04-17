import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './index.css'

const Navigation = () => {
    //MenuToggle Functionality
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
    };

    return (
        <>
            <section className="contact-bar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>
                                    <a href="mailto:rhiannah1993@gmail.com">
                                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=61551603390209" target="_blank">
                                        <i><FontAwesomeIcon icon={faFacebookSquare} /></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/nova.beautynails/" target="_blank">
                                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <nav>
                <div className="container navigation">
                    <div className="row">
                        <div className="col">
                            <a href="/" className="logo">NOVA</a>
                        </div>
                        <div className="col">

                            <a href="#"
                                className="menuToggle"
                                id="menuBtn"
                                onClick={ToggleClass}
                            >Menu</a>

                            <ul className={isActive ? "menu" : "menu active"} id="menu">
                                <li><NavLink to="/" onClick={ToggleClass}>Home</NavLink></li>
                                <li><NavLink to="/about" onClick={ToggleClass}>About</NavLink></li>
                                <li><NavLink to="/services" onClick={ToggleClass}>Services</NavLink></li>
                                <li><NavLink to="/contact" onClick={ToggleClass}>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation