import React from 'react';
import './style.css'
const FooterSection = ({backgroundClass}) => {
    return (
        <section className={`footer_section ${backgroundClass}`}>
            <div className='first_footer padding_forGrid'>
                <div className='text'>
                    <h3>Our Story</h3>
                    <p>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                </div>
                <div className='image'>

                </div>
            </div>
            <div className='second_footer'>
                <div className="grid_12col_container">
                    <div className='info'>
                        <p>63 Ly Chinh Thang,  Quan3</p>
                        <p>support@20studio.vn</p>
                    </div>
                    <div className='menu_footer'>
                        <ul>
                            <li>
                                <a>Work</a>
                            </li>
                            <li>
                                <a>Services</a>
                            </li>
                            <li>
                                <a>News</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='socal_footer'>
                    <ul>
                            <li>
                                <a>Instagram</a>
                            </li>
                            <li>
                                <a>Twitter</a>
                            </li>
                            <li>
                                <a>Facebook</a>
                            </li>
                            <li>
                                <a>Tiktok</a>
                            </li>
                        </ul>
                    </div>
                    <div className='btn_more'>
                        <a>More Story</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterSection;
