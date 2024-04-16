import Image from "next/image"
import Star from "../icons/Star"
import "./style.css"
export default function WorkSection() {
    return (
        <section className="work_section light_background">
            <div className="tittle">
                <h2>Work</h2>
            </div>
            <div className="grid_12col_container_nomargin" >
                <div className="intro">
                    <div className="tittle">
                        <Star />
                        <p>Danh mục sản phẩm</p>
                    </div>
                    <div className="detail">
                        20Studio cung cấp các sản phẩm dịch vụ dành cho đối tácg cấp các sản phẩm dịch vụ dành cho đối tácg cấp các sản phẩm dịch vụ dành cho đối tác
                    </div>
                </div>
                <div className="gr_item grid_12col_container_nomargin">
                <a>
                            <div>
                                <Image
                                 src="/home/ser1.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                        <a>
                            <div>
                                <Image
                                src="/home/ser2.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                        <a>
                            <div>
                                <Image
                             src="/home/ser3.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                        <a>
                            <div>
                                <Image
                                 src="/home/ser4.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width:"100%",height:"auto"}}
                                alt="services1"
                                />
                            </div>
                            <p>Phát Triển Mẫu</p>
                        </a>
                </div>
            </div>
        </section>
    )
}