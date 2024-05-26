import React from 'react'
import './style.css'
export default function FooterSection() {
    return (
        <section className='footer_section' id="footer_section">
            <div className='container'>
                <div className='title'>
                    <div>Our</div>
                    <div>Story</div>
                </div>
                <p className='body'>20Studio mong muốn đồng hành cùng bạn và tạo ra những sản phẩm chất lượng nhất với giá thành cạnh tranh theo đúng thời hạn cam kết.</p>
                <div className='divider'></div>
                <ul className='address'>
                    <li className="item">
                        <a >
                            30 Lý Chính Thắng<br />
                            P. Võ Thị Sáu<br />
                            Quận 3, HCM.
                            
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            vphcm@20studio.com
                        </a>
                    </li>
                </ul>
                <ul className='nav_footer'>
                    <li className="item">
                        <a >
                            Dự án
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            20Studio
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Dịch vụ
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Liên hệ
                        </a>
                    </li>
                </ul>
                <ul className='social'>
                    <li className='item'>
                        <a>
                            Facebook
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                            Instagram
                        </a>
                    </li>
                </ul>
                <a className="link">
                    <div className="wrap">
                        <div className="circle" >
                            Về chúng tôi
                         </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
