import React from 'react'
import './style.css'
import Image from 'next/image'
export default function Minded() {
    return (
        <section className='aboutus_minded'>
            <div  className="container">
                <h2   className="label">
                    <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <div  className="text">What we believe</div>
                </h2> 
                <h2  className="title">
                    <div className="title-mask">
                        <div className="title-line">"Agency” </div>
                    </div>
                    <div className="title-mask">
                        <div className="title-line">— trong</div>
                    </div>
                    <div className="title-mask">
                        <div className="title-line">ngành thời trang</div>
                    </div>
                {/*     <div className="title-mask">
                        <div className="title-line">Converts</div>
                    </div> */}
                </h2>
                <div  className="body">
                    <p>Tổ chức hoạt động như một “Agency”, 20Studio tạo ra giá trị bằng cách cung cấp các dịch vụ thiết kế, phát triển, xây dựng và quản lý cho các thương hiệu thời trang.</p>
                    <p>Sát cánh cùng khách hàng trong hành trình phát triển thượng hiệu thời trang, xây dựng và sản xuất các bộ sưu tập cũng như hỗ trợ quản lí hình ảnh thương hiệu, kinh doanh và sản xuất.</p>
                </div>
                <blockquote  className="quote">
                “Với lợi thế am hiểu thị trường và ứng dụng công nghệ, chúng tôi có thể giúp khách hàng biến thiết kế của họ thành hiện thực”
                </blockquote>
            </div>
            <div data-v-513a4b54="" className="image" style={{clipPath: "polygon(6.68% 0px, 93.32% 0px, 93.32% 100%, 6.68% 100%)"}}>
            <Image
                            src="/clone/aboutus/minded_1.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                </div>
                <div data-v-513a4b54="" className="background">
                    <div data-v-513a4b54="" className="dark"></div> 
                    <div data-v-513a4b54="" className="light"></div>
                </div>
        </section>
    )
}
