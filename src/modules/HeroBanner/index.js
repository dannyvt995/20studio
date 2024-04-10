"use client"

import "./style.css"
export default function HeroBanner() {
    return(
        <div  >
 <section className="hero_banner dark_background">
            <div className="content grid_12col_container grid_3row">
                <div className="head row1"><span>Fashion Brand Development</span></div>
                <div className="des row2"><p>We are where production takes place. Each country has its specialties. Our offices know them inside and out. Our teams are connected to customers and production partners through our digital platform.</p></div>
               <div className="more row3">
               <div className="menu">
                    <ul>
                        <li><a>Sản phẩm</a></li>
                        <li><a>Dịch vụ</a></li>
                        <li><a>Về chúng tôi</a></li>
                        <li><a>Liên hệ</a></li>
                    </ul>
                </div>
                <div className="more_info">
                    <ul>
                        <li><a>support@20studio.com</a></li>
                        <li><a>+84 99999999999</a></li>
                    </ul>
                </div>
               </div>
            </div>
        </section>
        </div>
       
    )
}