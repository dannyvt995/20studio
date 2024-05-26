"use client"
import React from 'react'
import './style.css'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';

export default function NavbarSectionDeskop({ handleRedirect }) {

    return (
        <nav className="nav" id='navbar'>
            <ul className="nav-list">

                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} autoLink={"/home"} classStyle={"nav-link"}>Trang chủ</ButtonHoverUnderLineNew></li>
                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} autoLink={"/work"} classStyle={"nav-link"}>Dự án</ButtonHoverUnderLineNew>
                </li>
                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} autoLink={"/about"} classStyle={"nav-link"}>20 Studio</ButtonHoverUnderLineNew>
                </li>
                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} autoLink={"/contact"} classStyle={"nav-link"}>Liên hệ</ButtonHoverUnderLineNew>
                </li>
            </ul>
        </nav>
    )
}
