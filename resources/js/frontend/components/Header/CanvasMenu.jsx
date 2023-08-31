import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useInternalLink} from "../../../lib/helper.js";

function CanvasMenu(props) {
    const {isLoading, generalSetting} = useSelector(state => state.generalSettings)
    return (
        <nav className="right_menu_togle hidden-md">
            <div className="close-btn">
                <div className="nav-link">
                    <Link id="nav-close" className="humburger nav-expander" to="#">
                        <span className="dot1"></span>
                        <span className="dot2"></span>
                        <span className="dot3"></span>
                        <span className="dot4"></span>
                        <span className="dot5"></span>
                        <span className="dot6"></span>
                        <span className="dot7"></span>
                        <span className="dot8"></span>
                        <span className="dot9"></span>
                    </Link>
                </div>
            </div>
            <div className="canvas-logo">
                <Link to="index.html"><img src={useInternalLink(generalSetting?.general?.site_logo) || ""} alt="logo"/></Link>
            </div>
            <div className="offcanvas-text">
                <p>Braintech quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in
                    porttitor
                    theo lacus egestas etiusto odio data center.</p>
            </div>
            <div className="canvas-contact">
                <div className="address-area">
                    <div className="address-list">
                        <div className="info-icon">
                            <i className="flaticon-location"></i>
                        </div>
                        <div className="info-content">
                            <h4 className="title">Address</h4>
                            <em>05 kandi BR. New York</em>
                        </div>
                    </div>
                    <div className="address-list">
                        <div className="info-icon">
                            <i className="flaticon-email"></i>
                        </div>
                        <div className="info-content">
                            <h4 className="title">Email</h4>
                            <em><Link to="mailto:support@rstheme.com">support@rstheme.com</Link></em>
                        </div>
                    </div>
                    <div className="address-list">
                        <div className="info-icon">
                            <i className="flaticon-call"></i>
                        </div>
                        <div className="info-content">
                            <h4 className="title">Phone</h4>
                            <em>+019988772</em>
                        </div>
                    </div>
                </div>
                <ul className="social">
                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-pinterest-p"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default CanvasMenu;
