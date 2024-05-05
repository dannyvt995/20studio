import Star from "../icons/Star";
import './style.css'
export default function AboutusDetail() {
    return(
        <section className="aboutus_detail_section dark_background">
                <div className="grid_12col_container grid_4row">
                    <div className="detail row1">
                        <div className="tag">
                            <Star/>
                            <p>Quy trình của 20Studio</p>
                        </div>
                        <p>Để đảm bảo chất lượng và thời gian cho khách hàng, 20studio cung cấp quy trình làm việc đầy đủ và nhanh chóng nhất</p>
                    </div>
                    <div className="advan_1 row2">
                       <div>
                            <h3>Nhận yêu cầu từ khách hàng</h3>
                            <span className="tag">01</span>
                       </div>
                        <p>Trao đổi yêu cầu Điền mẫu thông tin đơn hàng,Xét duyệt đơn hàng, Nhận thông tin từ khách hàng bao gồm: mô tả ý tưởng, hình ảnh mẫu, ảnh thiết kế, mẫu có sẵn. </p>
                    </div>
                    <div className="advan_2 row2">
                        <div>
                            <h3>Đề xuất & Báo giá</h3>
                            <span className="tag">02</span>
                        </div>
                        <p>Khách hàng nhận báo giá, trao đổi và tư vấn thêm về giá thành sản phẩm→ Tiếp nhận thanh toán đợt 1</p>
                    </div>
                   
                    <div className="advan_3 row3">
                        <div>
                            <h3>Thực hiện dịch vụ</h3>
                            <span className="tag">03</span>
                        </div>
                        <p>Với từng dịch vụ sẽ có các quy trình thiết kế riêng cho theo nhu cầu của khách hàng</p>
                    </div>
                    <div className="advan_4 row3">
                        <div>
                            <h3>Kiểm định & Bàn giao</h3>
                            <span className="tag">04</span>
                        </div>
                        <p>Kiểm định chất lượng sản phẩm, kết quả của dịch vụ. Căn cứ vào các điều khoản thỏa thuận giữa hai bên, 20Studio tiến hành kiểm tra, đo lường và bàn giao kết quả cho khách hàng.</p>
                    </div>
                  
                </div>
           {/*      <div className="head_anim ">
                        <h3>Forever&nbsp;Upwards</h3>
                    </div> */}
        </section>
    )
}