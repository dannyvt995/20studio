"use client"

import Image from 'next/image'
import './style.css'
import ButtonHoverUnderLine from '../ButtonHoverUnderLine'
export default function NavbarOpenFull({ handleRedirect }) {
    return (
        <section className='wrapper__navbar_open_full_section' id="w_navbarModal">
            <div className='navbar_open_full_section dark_background' id="navbarModal">
                <div className='grid_12col_container'>
                    <div className='img row1'>
                        <Image src="/home/ser1.webp" alt="navbarimg" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "100%" }} />
                    </div>
                    <div className='menu_item_list row1'>
                        <ul className='format'>
                            <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/home" data_type="outsite">20 Studio</ButtonHoverUnderLine></li>
                            <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/work" data_type="outsite">Dự án</ButtonHoverUnderLine></li>
                            <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/about" data_type="outsite">Về chúng tôi</ButtonHoverUnderLine></li>
                            {/*  <li><a onClick={handleRedirect} data_link="/page3"  data_type="onsite">????</a></li> */}
                            <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/contact" data_type="outsite">Liên hệ</ButtonHoverUnderLine></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
