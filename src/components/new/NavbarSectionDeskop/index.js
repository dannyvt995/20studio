"use client"
import React, { memo } from 'react'
import './style.css'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderLineNew';

function NavbarSectionDeskop() {
    return (
        <nav className="nav" id='navbar'>
            <ul className="nav-list">

                <li className="nav-item">
                    <ButtonHoverUnderLineNew  noName={"calc(var(--font-s-p-small) * 1.36)"} auto_link={"/home"} classStyle={"nav-link"}>Trang chủ</ButtonHoverUnderLineNew></li>
                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} auto_link={"/work"} classStyle={"nav-link"}>Dự án</ButtonHoverUnderLineNew>
                </li>
                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} auto_link={"/about"} classStyle={"nav-link"}>20 Studio</ButtonHoverUnderLineNew>
                </li>
                <li className="nav-item">
                    <ButtonHoverUnderLineNew noName={"calc(var(--font-s-p-small) * 1.36)"} auto_link={"/contact"} classStyle={"nav-link"}>Liên hệ</ButtonHoverUnderLineNew>
                </li>
            </ul>
        </nav>
    )
}
export default  memo(NavbarSectionDeskop)