import React from "react"
import { Link } from "gatsby"
import './Footer.css'

const Footer = ({ post }) => {
    return (
        <div className="Footer">
            <div className="Footer--Followers">
                <span>
                    تهران‌جی‌اس را دنبال کنید
                </span>
                <ul>
                    <li>
                        <a href="https://t.me/tehranjs">
                            <i className="fa fa-telegram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}

export default Footer
