import React from 'react';
import './style.css'
const OurPartners = ({ backgroundClass }) => {
    return (

        <section className={`our_partners_section ${backgroundClass}`}>
            <div className='grid_12col_container grid_2row'>
                <div className='row1 title'>
                    <h2>Đối Tác Đồng Hành</h2>
                </div>
                <div className='row1 tag'>
                    <span>
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    </span>
                    <p>Khách hàng</p>
                </div>
                <div className='row2 listLogoPartners'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}

export default OurPartners;
