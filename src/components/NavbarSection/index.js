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
                        <li><Link href="/work">Work</Link></li>
                        <li><Link href="/20studio">Studio</Link></li>
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </nav>
    )
}