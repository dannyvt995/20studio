import Link from "next/link"
import "./style.css"

export default function NavbarSection() {
    return (
        <nav>
            <div className="navbar_section">
                <div className="grid_12col_container">
                <div className="logo">
                    <span>20 studio</span>
                </div>
                <div className="menu_list">
                    <ul>
                        <li><Link href="/work">Dự án</Link></li>
                        <li><Link href="/20studio">Về chúng tôi</Link></li>
                        <li><Link href="/news">????</Link></li>
                        <li><Link href="/contact">Liên hệ</Link></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </nav>
    )
}