import "./index.css"
import { useState } from 'react' 
import { Link } from 'react-router-dom'

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
}

const Footer = () => {

    const [currentDate] = useState(getDate());

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Services</h2>
                        <ul>
                            <li><Link to="/services">Nails</Link></li>
                            <li><Link to="/services">Massage</Link></li>
                            <li><Link to="/services">Microdermabrasion</Link></li>
                            <li><Link to="/services">Waxing</Link></li>
                            <li><Link to="/services">Facials</Link></li>
                            <li><Link to="/services">Lashes</Link></li>
                            <li><Link to="/services">Hair</Link></li>
                            <li><Link to="/services">Brows</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">Massage</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Contact</h2>
                        <p>Phone Number?</p>
                        <p>Email?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col full-width-col">
                        <p className="copyNotice">Nova Beauty &copy; {currentDate}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer