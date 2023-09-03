import React, {createRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useInternalLink} from "../../../lib/helper.js";
import {humburgerNavAction} from "../../../featurs/NavAction/NavSlice.js";

function Top({general}) {
    const maiMenuRef = createRef()
    const menuAriaRef = createRef()

    const windowScroll = () => {
        if (window.pageYOffset > 100) {
            menuAriaRef.current.classList.add('sticky')
        } else {
            menuAriaRef.current.classList.remove('sticky')
        }
    }

    window.onscroll = windowScroll

    const dispatch = useDispatch()

    return (
        <header id="rs-header" className="rs-header style3 modify2 header-transparent">
            <div ref={menuAriaRef} className="menu-area menu-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="logo-part">
                                <Link to="/">
                                    <img className="normal-logo" src={useInternalLink(`/${general?.site_secondary_logo}`)} alt="logo" style={{maxHeight: "55px"}}/>
                                        <img className="sticky-logo" src={useInternalLink(`/${general?.site_logo}`)} alt="logo" style={{maxHeight: "55px"}}/>
                                </Link>
                            </div>
                            <div className="mobile-menu">
                                <Link to="#" className="rs-menu-toggle rs-menu-toggle-close" onClick={e=>{
                                    e.preventDefault()
                                    maiMenuRef.current.classList.toggle("d-block")
                                }}>
                                    <i className="fa fa-bars"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10 text-right">
                            <div className="rs-menu-area">
                                <div ref={maiMenuRef} className="main-menu">
                                    <nav className="rs-menu pr-100 lg-pr-50 md-pr-0">
                                        <ul className="nav-menu">
                                            <li className="rs-mega-menu menu-item-has-children current-menu-item">
                                                <Link to="/">Home</Link>

                                            </li>
                                            <li>
                                                <Link to="#">About</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Services</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="software-development.html">Software Development</Link>
                                                    </li>
                                                    <li><Link to="web-development.html">Web Development</Link></li>
                                                    <li><Link to="analytic-solutions.html">Analytic Solutions</Link>
                                                    </li>
                                                    <li><Link to="product-design.html">Cloud and DevOps</Link></li>
                                                    <li><Link to="product-design.html">Product Design</Link></li>
                                                    <li><Link to="data-center.html">Data Center</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <Link to="#">Services</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link to="services1.html">Services 1</Link></li>
                                                            <li><Link to="services2.html">Services 2</Link></li>
                                                            <li><Link to="services3.html">Services 3</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="our-team.html">Our Team</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="single-team.html">Single Team</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="#">Case Studies</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link to="case-studies-style1.html">Case Studies
                                                                Style
                                                                1</Link></li>
                                                            <li><Link to="case-studies-style2.html">Case Studies
                                                                Style
                                                                2</Link></li>
                                                            <li><Link to="case-studies-style3.html">Case Studies
                                                                Style
                                                                3</Link></li>
                                                            <li><Link to="case-studies-style4.html">Case Studies
                                                                Style
                                                                4</Link></li>
                                                            <li><Link to="case-studies-style5.html">Case Studies
                                                                Style
                                                                5</Link></li>
                                                            <li><Link to="case-studies-style6.html">Case Studies
                                                                Style
                                                                6</Link></li>
                                                            <li><Link to="case-studies-style7.html">Case Studies
                                                                Style
                                                                7</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="shop.html">Shop</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link to="shop.html">Shop</Link></li>
                                                            <li><Link to="shop-single.html">Shop Single</Link></li>
                                                            <li><Link to="cart.html">Cart</Link></li>
                                                            <li><Link to="checkout.html">Checkout</Link></li>
                                                            <li><Link to="my-account.html">My Account</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="pricing.html">Pricing</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="faq.html">Faq</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="error.html">404</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="blog.html">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="blog.html">Blog</Link></li>
                                                    <li><Link to="blog-details.html">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="contact.html">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="expand-btn-inner search-icon hidden-md">
                                    <ul>
                                        {/*<li className="sidebarmenu-search">*/}
                                        {/*    <Link className="hidden-xs rs-search" data-target=".search-modal"*/}
                                        {/*       data-toggle="modal" href="#">*/}
                                        {/*        <i className="flaticon-search"></i>*/}
                                        {/*    </Link>*/}
                                        {/*</li>*/}
                                        <li>
                                            <Link id="nav-expander" className="humburger nav-expander" to="#" onClick={e=>{
                                                e.preventDefault()
                                                dispatch(humburgerNavAction())
                                            }}>
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
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Top;
