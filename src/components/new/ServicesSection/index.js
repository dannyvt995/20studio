import React from 'react'

import './style.css'
import Image from 'next/image'
export default function ServicesSection() {
    return (
        <section className='servcies_section' id="servcies_section">
            <div className='container'>
                <div className='text'>
                    <h2 className='lable'><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>Danh mục sản phẩm</h2>
                    <h3 className='title'>Dự án</h3>
                    <div className='body'>
                        <p>Các dự án hân hạnh được đồng hành cùng khách hàng trong năm qua</p>
                    </div>
                </div>
            </div>
            <div className='services'>
                <a className='service'>
                    <div className='block'>
                        <Image src="/clone/ser1.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className='info'>
                        <span><strong>Chinh’s Major Project - </strong>Phát triển mẫu</span>
                    </p>
                </a>
                <a className='service'>
                    <div className='block'>
                    <Image src="/clone/ser2.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className='info'>
                        <span><strong>Nét Project - </strong>Phát triển mẫu</span>
                    </p>
                </a>
                <a className='service'>
                    <div className='block'>
                    <Image src="/clone/ser3.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className='info'>
                        <span><strong>Lung Tung - </strong>Quản lí sản xuất</span>
                    </p>
                </a>
                <a className='service'>
                    <div className='block'>
                    <Image src="/clone/services1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className='info'>
                        <span><strong>20Project -</strong>Thiết kế đồ hoạ</span>
                    </p>
                </a>
            </div>
        </section>
    )
}
