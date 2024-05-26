import React from 'react';
import './style.css'
import Star from '../../icons/Star';
const FAQSection = ({backgroundClass}) => {
    return (
        <section className={`faq_section ${backgroundClass}`}>
            <div className='grid_12col_container grid_2row'>
            <div className='row1 tag'>
                    <Star/>
                    <p>Faqs</p>
                </div>
                <div className='row1 title'>
                    <h2>Những Câu Hỏi Thường Gặp</h2>
                </div>
             
                <div className='row2 listContent'>
                    <ul className='format' id="listfaqs">
                        <li><a className='ask'>What is your sample lead time?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>What is your production lead time?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>What information do we need to supply to use you as our clothing manufacturer?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>Do you offer any specific certifications or audits?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>Where is our manufacturing facility located?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>Can we come and visit the factory?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>What do we manufacture?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>How do you ship your garments?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>Do you support with the design and development?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>What are your shipping costs?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                        <li><a>Where can you ship to?</a><div className='ans'>ed to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothinged to supply to use you as our clothing</div></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
