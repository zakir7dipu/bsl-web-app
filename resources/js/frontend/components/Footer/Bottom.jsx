import React from 'react';
import Style from "./Bottom.module.css"
import {Link} from "react-router-dom";

function Bottom({general}) {
    const date = new Date()
    return (
        <div className={`footer-bottom ${Style.footerBottom}`}>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 text-right md-mb-10 order-last">
                        <ul className="copy-right-menu">
                            <li className={Style.copyRightMenuLi}><Link to="/">Home</Link></li>
                            <li className={Style.copyRightMenuLi}><Link to="/about">About</Link></li>
                            <li className={Style.copyRightMenuLi}><Link to="/blog">Blog</Link></li>
                            <li className={Style.copyRightMenuLi}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright">
                            <p className="mb-0">&copy; {date.getFullYear()} All Rights Reserved. Developed By <Link to="/">{general?.site_name}</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Bottom;
