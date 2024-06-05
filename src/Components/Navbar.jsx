import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../img/paint-logo.png"
import whatsapp from "../img/whatsapp.png"
import callIcon from "../img/phone-call-icon.jpg"

export default function Navbar() {

    const location = useLocation()
    const navRef = useRef()
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true)
    const isLinkActive = (path) => {
        if (location.pathname === path) {
            return "active-navlink"
        }
    }
    const handleNavBar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed)
    }
    const closeNavBar = () => {
        if (window.innerWidth <= 768) {
            setIsNavbarCollapsed(true)
        }
    }
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsNavbarCollapsed(true)
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg" ref={navRef}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className='img-fluid' onClick={closeNavBar} style={{ width: "200px" }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavbarCollapsed} onClick={handleNavBar} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavBar}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Painting Services
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/villa-painting" onClick={closeNavBar}>Villa Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/office-painting" onClick={closeNavBar}>Office Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/appartment-painting" onClick={closeNavBar}>Apartment Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/house-painting" onClick={closeNavBar}>House Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/commercial-painting" onClick={closeNavBar}>Commercial Painting</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Interior Painting
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/anti-fungal-painting" onClick={closeNavBar}>Antifungal Wall Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/furniture-painting" onClick={closeNavBar}>Door & Furniture Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/epoxy-floring" onClick={closeNavBar}>Epoxy Flooring</Link></li>
                                    <li><Link className="dropdown-item" to="/interior-parquet-painting" onClick={closeNavBar}>Interior Parquet Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/move-in/out-painting" onClick={closeNavBar}>Move In/Out Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/wallpaper-installation" onClick={closeNavBar}>Wallpaper Installation</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Exterior Painting
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/exterior-painting" onClick={closeNavBar}>Exterior Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/exterior-facade-painting" onClick={closeNavBar}>Exterior Facade Painting</Link></li>
                                    <li><Link className="dropdown-item" to="/exterior-metallic-fence-painting" onClick={closeNavBar}>Exterior Metallic Painting</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact" onClick={closeNavBar}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/message/HTU2ZUDOHQPEL1?autoload=1&app_absent=0" target="blank">
                    <img src={whatsapp} alt='whatsapp-icon' className='whatsappIcon'></img>
                </a>
                <a href="tel:+971567453487" target="blank">
                    <img src={callIcon} alt='call-icon' className='callIcon'></img>
                </a>
            </nav>

        </div>
    )
}

