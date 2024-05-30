"use client"

import './style.css'

export default function Advantage() {
  
    return (
        <section className='aboutus_advantage dark_background'  >
            <div className='container'>
                <h2 className='label'>
                    <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                        Quy trình của 20Studio
                </h2>
                <div className="intro"><p>Để đảm bảo chất lượng và thời gian cho khách hàng, 20studio cung cấp quy trình làm việc đầy đủ và nhanh chóng nhất.</p></div>
                <div className="items">
                    <div className="item">
                        <span className="index">01</span>
                        <h3 className="subtitle">Nhận yêu cầu từ khách hàng</h3> 
                        <div className="body">
                            <p>
                                Trao đổi yêu cầu<br/>
                                Điền mẫu thông tin đơn hàng<br/>
                                Xét duyệt đơn hàng<br/>
                                Nhận thông tin từ khách hàng bao gồm: mô tả ý tưởng, hình ảnh mẫu, ảnh thiết kế, mẫu có sẵn.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <span className="index">
                            02
                        </span>
                        <h3 className="subtitle">
                            Đề xuất & Báo giá
                        </h3>
                        <div className="body">
                            <p>Khách hàng nhận báo giá, trao đổi và tư vấn thêm về giá thành sản phẩm
                            <br/>→ Tiếp nhận thanh toán đợt 1.</p>
                        </div>
                    </div>
                
                    <div className="item">
                        <span className="index">
                            03
                        </span>
                        <h3 className="subtitle">
                            Thực hiện dịch vụ
                        </h3>
                        <div className="body"
                        >
                            <p>Với từng dịch vụ sẽ có các quy trình thiết kế riêng cho theo nhu cầu của khách hàng.</p>
                            <ul>
                                <li>Phát Triển Mẫu</li>
                                <li>Sản Xuất</li>
                                <li>Thiết Kế & Rập</li>
                                <li>Quản lí Sản Xuất</li>
                                <li>Website & Thương Mại</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <span className="index">
                            04
                        </span>
                        <h3 className="subtitle">
                        Kiểm định & Bàn giao 
                        </h3>
                        <div className="body">
                            <p>Kiểm định chất lượng sản phẩm, kết quả của dịch vụ. Căn cứ vào các điều khoản thỏa thuận giữa hai bên, 20Studio tiến hành kiểm tra, đo lường và bàn giao kết quả cho khách hàng.</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}
