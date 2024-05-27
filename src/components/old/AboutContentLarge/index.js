"use client"
import { useEffect, useRef } from 'react';
import Star from '../../icons/Star';
import './style.css'
import Image from 'next/image';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutContentLarge = ({ backgroundClass1, backgroundClass2, backgroundClass3 }) => {

    return (
        <>
         {/*    <div className='bangron'>
                <div className='w_content'>
                <h3>CREATIVE PRODUCTION COMPANY</h3>
                </div>
            </div> */}
            <section id='AboutContentLarge_section1' className={` ${backgroundClass1}`}>

                <div className='content grid_2row'>
                    <div className='row1 grid_12col_container '>
                        <span className='tag'> <Star /><p>Tổ Chức</p></span>
                        <h2>Agency” trong ngành thời trang</h2>
                    </div>
                    <div className='row2 grid_12col_container '>
                        <div className='mutil_line'>
                            <p>Tổ chức hoạt động như một “Agency”, 20Studio tạo ra giá trị bằng cách cung cấp các dịch vụ thiết kế, phát triển, xây dựng và quản lý cho các thương hiệu thời trang</p>
                            <p>Sát cánh cùng khách hàng trong hành trình phát triển thượng hiệu thời trang, xây dựng và sản xuất các bộ sưu tập cũng như hỗ trợ quản lí hình ảnh thương hiệu, kinh doanh và sản xuất.</p>
                        </div>
                        <p>“Với lợi thế am hiểu thị trường và ứng dụng công nghệ, chúng tôi có thể giúp khách hàng biến thiết kế của họ thành hiện thực”</p>

                    </div>
                </div>
            </section>
            <section id='AboutContentLarge_section2' className={` ${backgroundClass2}`}>
                <div className='content  grid_2row'>
                    <div className='row1 grid_12col_container'>
                    <span className='tag'> <Star /><p>Câu chuyện</p></span>
           
                        <h2>Tìm kiếm cơ hội trong thử thách</h2>
                    </div>
                    <div className='row2 grid_12col_container'>
                        <p>Là những người trẻ xây dựng giấc mơ khởi nghiệp năm 20 tuổi, chúng tôi đại diện cho tinh thần sáng tạo, nhiệt huyết đầy nỗ lực và học hỏi không ngừng, bằng kỹ thuật hiện đại kết hợp với đội ngũ nhân lực đầy kinh nghiệm tạo ra những sản phẩm chất lượng nhất.</p>
                      
                    </div>
                    <div className='img1'>
                            <Image
                                src="/aboutuslargesection/2.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                            />

                        </div>
                        <div className="img2">
                            <Image
                                src="/aboutuslargesection/3.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                            />
                        </div>
                </div>
            </section>
            <section id='AboutContentLarge_section3' className={` ${backgroundClass3}`}>
                <div className='content  grid_4row'>
                    <div className='row1 grid_12col_container'>
                        <div className='detail'>
                            <h2>Sứ Mệnh</h2>
                            <p>Trao đổi yêu cầu. Điền mẫu thông tin đơn hàng. Xét duyệt đơn hàng. Nhận thông tin từ khách hàng bao gồm: mô tả ý tưởng, hình ảnh mẫu, ảnh thiết kế, mẫu có sẵn.</p>
                        </div>
                        <div className='img'>
                            <Image
                                src="/aboutuslargesection/4.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                            />
                        </div>
                    </div>
                    <div className='row2 grid_12col_container'>
                        <div className='img'>
                            <Image
                                src="/aboutuslargesection/5.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                                
                            />
                            <div>
                                <Image
                                    src="/aboutuslargesection/6.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="services1"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row3 grid_12col_container'>
                        <div className='detail'>
                            <h2>Sứ Mệnh</h2>
                            <p>Trao đổi yêu cầu. Điền mẫu thông tin đơn hàng. Xét duyệt đơn hàng. Nhận thông tin từ khách hàng bao gồm: mô tả ý tưởng, hình ảnh mẫu, ảnh thiết kế, mẫu có sẵn.</p>

                        </div>
                        <div className='img'>
                            <Image
                                src="/aboutuslargesection/7.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                            />
                        </div>

                    </div>
                    <div className='row4 grid_12col_container'>
                        <div className='detail'>
                            <h2>Giá Trị Cốt Lõi</h2>
                            <p style={{width:'72%'}}>Với từng dịch vụ sẽ có các quy trình thiết kế riêng cho theo nhu cầu của khách hàng</p>
                            <ul style={{listStyleType:'circle !important'}}>
                                <li>Phát Triển Mẫu</li>
                                <li>Sản Xuất</li>
                                <li>May Đo/ Thiết Kế</li>
                                <li>Quản lý Sản Xuất</li>
                                <li>Website & Thương mại</li>
                            </ul>
                            <div className='img'>
                                <Image
                                    src="/aboutuslargesection/9.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="services1"
                                />
                                <Image
                                    src="/aboutuslargesection/10.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="services1"
                                />
                            </div>
                        </div>
                        <div className='img'>
                            <Image
                                src="/aboutuslargesection/8.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="services1"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default AboutContentLarge;
