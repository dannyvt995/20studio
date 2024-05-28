import React from 'react'
import './style.css'
import Image from 'next/image'

export default function Intro() {
    return (
        <section className='aboutus_intro'>
            <div className='container'>
                <ul className='images'>
                    <li className='image'>
                        <Image
                            src="/clone/aboutus/intro_1.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 1"
                        />
                    </li>
                    <li className='image'>
                        <Image
                            src="/clone/aboutus/intro_2.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                    </li>
                    <li className='image'>
                        <Image
                            src="/clone/aboutus/intro_3.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 3"
                        />
                    </li>
                </ul>
                <div className='text'>
                    <h2 className='label'>
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                        Lĩnh vực hoạt động
                    </h2>
                    <h2 className="title">20Studio là một mạng lưới các nhà cung cấp thời trang được thiết kế hệ thống theo quy trình bài bản.</h2>
                    <div className="body"><ul><li><p>Thời Trang &amp; Sản Xuất May Mặc</p></li><li><p>Nhiếp Ảnh &amp; Marketing Thời Trang</p></li><li><p>Thiết kế đồ hoạ &amp; Công nghệ</p></li></ul></div>
                </div>
            </div>
        </section>
    )
}
