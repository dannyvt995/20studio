import React from 'react';
import Star from '../../icons/Star';
import './style.css'
const OurPartners = ({ backgroundClass }) => {
    return (

        <section className={`our_partners_section ${backgroundClass}`}>
            <div className='grid_12col_container grid_2row'>
                <div className='row1 title'>
                    <h2>Đối Tác Đồng Hành</h2>
                </div>
                <div className='row1 tag'>
                         <Star/>
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
