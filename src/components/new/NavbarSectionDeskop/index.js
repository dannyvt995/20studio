"use client"
import React from 'react'
import './style.css'

export default function NavbarSectionDeskop({handleRedirect}) {
    const handleClick = (e) => {
        if (handleRedirect) {
            handleRedirect(e);
        }
    };
    return (
        <nav className="nav" id='navbar'>
            <ul className="nav-list">
            
                <li className="nav-item"><a onClick={handleClick}  data_link="/home" className="nav-link">
                    Home
                </a></li>
                <li className="nav-item">
                    <a  onClick={handleClick}  data_link="/work" className="nav-link">
                        Work
                    </a></li><li className="nav-item"><a onClick={handleClick} data_link="/about"  className="nav-link">
                    20 Studio
                </a></li>
                <li className="nav-item"><a onClick={handleClick}   data_link="/contact"  className="nav-link">
                    Contact
                </a>
                </li>
            </ul>
        </nav>
    )
}
