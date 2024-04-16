import React from 'react';
import Star from '../icons/Star';
import './style.css'
const Aboutusintro = ({backgroundClass}) => {
    return (

        <section className={`sametime aboutus_intro_section ${backgroundClass}`}>
            <div className='grid_12col_container grid_2row'>
                <div className='tag row1'>
                    <Star />
                    <p>Partners</p>
                </div>
                <div className='detail row1'>
                    <p>We partner with brands and businesses that create exceptional experiences where people live, work and unwind.</p>
                </div>
                <div className='more row2' >
                    <p>Interior Design & Furniture Architecture & Real Estate Hospitality, Travel & Tourism</p>
                </div>
            </div>
        </section>
    );
}

export default Aboutusintro;
