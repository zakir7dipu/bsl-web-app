import React, {createRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, useLocation} from "react-router-dom";
import {humburgerNavAction} from "../../../featurs/NavAction/NavSlice.js";
import {fetchParentServices} from "../../../featurs/Service/ServiceSlice.js";
import {uid, useInternalLink} from "../../../lib/helper.js";
import ImgSkel from "../Skeletons/ImgSkel.jsx";

function Top({loading, general}) {
    const {pathname} = useLocation();
    const maiMenuRef = createRef()
    const menuAriaRef = createRef()

    const {
        parentServices
    } = useSelector((state) => state.serviceReducer);


    const windowScroll = () => {
        if (window.pageYOffset > 100) {
            menuAriaRef.current.classList.add('sticky')
        } else {
            menuAriaRef.current.classList.remove('sticky')
        }
    }

    window.onscroll = windowScroll

    const dispatch = useDispatch()

    const handelMobileSubMenu = (e) => {
        let submenu = e.target.parentElement.parentElement.querySelector('ul.sub-menu')
        submenu.classList.toggle("visible")
    }

    const handelMobileSubMenuService = (e) => {
        let submenu = e.target.parentElement.parentElement.querySelector('ul.services-menu')
        submenu.classList.toggle("visible")
    }

    useEffect(() => {
        let navLinks = maiMenuRef.current.querySelectorAll("a")
        Array.from(navLinks).map(item => {
            if (item.classList.contains("active")) {
                if (item.closest("ul").classList.contains("sub-menu")) {
                    item.closest("ul").closest('.menu-item-has-children').classList.add("current-menu-item")
                }
                item.closest('li').classList.add("current-menu-item")
            } else {
                item.closest('li').classList.remove("current-menu-item")
            }
        })
    }, [pathname])

    useEffect(() => {
        dispatch(fetchParentServices(0));
    }, [dispatch]);

    return (
        <header id="rs-header" className="rs-header style3 modify2 header-transparent">
            <div ref={menuAriaRef} className="menu-area menu-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="logo-part">
                                {loading? <ImgSkel
                                    width={`113px`}
                                    height={`55px`}
                                /> : <Link to="/">
                                    <img className="normal-logo"
                                         src={useInternalLink(`/${general?.site_secondary_logo}`)} alt="logo"
                                         style={{maxHeight: "55px"}}/>
                                    <img className="sticky-logo" src={useInternalLink(`/${general?.site_logo}`)}
                                         alt="logo" style={{maxHeight: "55px"}}/>
                                </Link>}

                            </div>
                            <div className="mobile-menu">
                                <Link to="#" className="rs-menu-toggle rs-menu-toggle-close" onClick={e => {
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
                                            <li>
                                                <NavLink to="/">Home</NavLink>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">About</Link>
                                                <ul className="sub-menu about-menu">
                                                    <li>
                                                        <NavLink to="/about">Our Company</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/management">Our Management</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/team">Our Team</NavLink>
                                                    </li>
                                                </ul>
                                                <span className="rs-menu-parent" onClick={handelMobileSubMenu}>
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <Link to="#">Services</Link>
                                                <ul className="sub-menu services-menu">
                                                    {parentServices && parentServices.map(item =>
                                                        <li key={uid()}>
                                                            <NavLink
                                                                to={`service/${item?.slug}/details`}>{item?.title}</NavLink>
                                                        </li>
                                                    )}
                                                    <li><NavLink to="/events">Events</NavLink></li>
                                                </ul>
                                                <span className="rs-menu-parent" onClick={handelMobileSubMenuService}>
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </li>

                                            <li>
                                                <NavLink to="blog">ERP News</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="expand-btn-inner search-icon hidden-md">
                                    <ul className="parent-ul">
                                        <li>
                                            <Link id="nav-expander" className="humburger nav-expander" to="#"
                                                  onClick={e => {
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
