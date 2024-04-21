import Star from "../icons/Star";
import './style.css'
export default function AboutusDetail() {
    return(
        <section className="aboutus_detail_section dark_background">
                <div className="grid_12col_container grid_4row">
                    <div className="detail row1">
                        <div className="tag">
                            <Star/>
                            <p>How we work</p>
                        </div>
                        <h3>We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.</h3>
                    </div>
                    <div className="advan_1 row2">
                       <div>
                            <h3>Elevating sophistication across all senses</h3>
                            <span className="tag">01</span>
                       </div>
                        <p>We ensure that the high standards and sophistication of your product are experienced by all senses while blurring the lines between the physical and the digital world. We go deep into details to provide a holistic experience that leaves a lasting impression on your customers and fits seamlessly into your existing ecosystem.</p>
                    </div>
                    <div className="advan_2 row2">
                        <div>
                            <h3>To be human is our greatest quality</h3>
                            <span className="tag">02</span>
                        </div>
                        <p>We believe that intuition is the most advanced technology we have, and curiosity is our most powerful tool. Our team is guided by the principles of compassion and honesty in our day-to-day communications, and we understand that people value feeling more than information. That's why we pour a lot of soul and passion into our work, delivering experiences that touch people on a deeper level.</p>
                    </div>
                   
                    <div className="advan_3 row3">
                        <div>
                            <h3>Simplicity is the dot on our horizon</h3>
                            <span className="tag">03</span>
                        </div>
                        <p>In today's world, we have become information-rich and time-poor. It is those who focus on what really matters that set the tone. We approach every project with a keen eye for simplicity and elegance. Great digital design is the perfect blend of form and function that focuses on the essentials and leaves behind the frivolous.</p>
                    </div>
                    <div className="advan_4 row3">
                        <div>
                            <h3>Uncompromising standard of excellence</h3>
                            <span className="tag">04</span>
                        </div>
                        <p>We aim to push boundaries and exceed expectations with every project, consistently delivering award-winning digital experiences. We recognize that true art lies in the intricacies, so we approach each project with a meticulous eye for detail and a commitment to crafting tailor-made experiences that capture the essence of your brand. Down to earth but reaching for the stars</p>
                    </div>
                  
                </div>
           {/*      <div className="head_anim ">
                        <h3>Forever&nbsp;Upwards</h3>
                    </div> */}
        </section>
    )
}