import React from 'react'
import './style.css'
import Image from 'next/image'

export default function Us() {
    return (
        <section  className="aboutus_us dark_background" >
            <div  className="container">
                <h2   className="label">
                    <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <div  className="text">The 20?</div>
                </h2>  
                <h3 className="title">
                    <div className="title-mask">
                        <div className="title-line">Tìm kiếm</div>
                    </div>
                    <div className="title-mask">
                        <div className="title-line">cơ hội</div>
                    </div>
                    <div className="title-mask">
                        <div className="title-line">trong thử thách</div>
                    </div>
                </h3>
                <div className="body">
                    <p>Là những người trẻ xây dựng giấc mơ khởi nghiệp năm 20 tuổi, chúng tôi đại diện cho tinh thần sáng tạo, nhiệt huyết đầy nỗ lực và học hỏi không ngừng, bằng kỹ thuật hiện đại kết hợp với đội ngũ nhân lực đầy kinh nghiệm tạo ra những sản phẩm chất lượng nhất.</p>
                </div>
                <div className="images">
                    <div className="image" >
                        <Image
                            src="/clone/aboutus/us_1.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                    </div>
                    <div className="image">
                        <Image
                            src="/clone/aboutus/us_2.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                    </div>
                </div>
                <blockquote className="quote">
                    *20STUDIO mong muốn đồng hành cùng bạn và tạo ra những sản phẩm chất lượng nhất với giá thành cạnh tranh theo đúng thời hạn cam kết.
                </blockquote>
            </div>
        </section>
    )
}
