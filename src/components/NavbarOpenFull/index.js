"use client"

import Image from 'next/image'
import './style.css'
export default function NavbarOpenFull({ handleRedirect }) {
    return (
        <section className='navbar_open_full_section dark_background'>
            <div className='grid_12col_container'>
                <div className='img row1'>
                    <Image src="/home/ser1.png" alt="navbarimg" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "100%" }} />
                </div>
                <div className='menu_item_list row1'>
                    <ul>
                        <li><a onClick={handleRedirect} data-link="/page1"  data-type="outsite">Work</a></li>
                        <li><a onClick={handleRedirect} data-link="/page2"  data-type="outsite">Studio</a></li>
                        <li><a onClick={handleRedirect} data-link="/page3"  data-type="outsite">News</a></li>
                        <li><a onClick={handleRedirect} data-link="/page4"  data-type="outsite">Contact</a></li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
