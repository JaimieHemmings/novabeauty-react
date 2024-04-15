import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Navigation = () => {
    //MenuToggle Functionality
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
    };

    return (
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
                            <li><NavLink to="/about" onClick={ToggleClass}>About</NavLink></li>
                            <li><NavLink to="/services" onClick={ToggleClass}>Services</NavLink></li>
                            <li><NavLink to="/contact" onClick={ToggleClass}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation