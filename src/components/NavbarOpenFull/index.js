"use client"

import Image from 'next/image'
import './style.css'
import ButtonHoverUnderLine from '../ButtonHoverUnderLine'
export default function NavbarOpenFull({ handleRedirect }) {
    return (
        <section className='navbar_open_full_section dark_background'>
            <div className='grid_12col_container'>
                <div className='img row1'>
                    <Image src="/home/ser1.png" alt="navbarimg" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "100%" }} />
                </div>
                <div className='menu_item_list row1'>
                    <ul className='format'>
                        <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page1" data_type="outsite">Dự án</ButtonHoverUnderLine></li>
                        <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page2" data_type="outsite">Về chúng tôi</ButtonHoverUnderLine></li>
                        {/*  <li><a onClick={handleRedirect} data_link="/page3"  data_type="onsite">????</a></li> */}
                        <li><ButtonHoverUnderLine eventPass={handleRedirect} data_link="/page4" data_type="outsite">Liên hệ</ButtonHoverUnderLine></li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
