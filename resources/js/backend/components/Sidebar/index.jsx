import React from 'react';
import {Link} from "react-router-dom";
import {Scrollbars} from 'rc-scrollbars';
import NavBarLink from "../NavBarLink";

function Index(props) {
    return (
        <div className="nk-sidebar pb-0" style={{
            height: '90vh'
        }}>
            <Scrollbars style={{ width: 'auto', height: '100%', overflow: 'hidden', position: 'relative' }}>
                <div className="nk-nav-scroll active" style={{
                    overflowX: 'hidden',
                    width: 'auto',
                    height: '100%',
                }}>
                    <ul className="metismenu" id="menu">
                        <li className="nav-label">Dashboard</li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin'}
                                linkName={'Dashboard'}
                                hasSubMenu={false}
                                menuIcon={<i className="icon-speedometer menu-icon"></i>}
                            />
                        </li>
                        <li className="mega-menu mega-menu-sm">
                            <NavBarLink
                                link='#'
                                linkName={'Settings'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-globe-alt menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="settings">Settings</Link></li>
                                    <li><Link to="page-settings">Page Settings</Link></li>
                                </ul>
                            </NavBarLink>

                        </li>
                        <li className="nav-label">Menus</li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/industries'}
                                linkName={'Industries'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-industry menu-icon"></i>}
                            />
                        </li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/technology'}
                                linkName={'Technology'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-gears menu-icon"></i>}
                            />
                        </li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Abouts'}
                                hasSubMenu={true}
                                menuIcon={<i className="fa fa-globe menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="about-us">About Us</Link></li>
                                    <li><Link to="our-management">Management</Link></li>
                                    <li><Link to="our-teams">Teams</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/clients'}
                                linkName={'Clients'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-users menu-icon"></i>}
                            />
                        </li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/partner'}
                                linkName={'Partner'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-handshake-o menu-icon"></i>}
                            />
                        </li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Services'}
                                hasSubMenu={true}
                                menuIcon={<i className="fa fa-server menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="services">Services</Link></li>
                                    <li><Link to="products">Products</Link></li>
                                    <li><Link to="courses">Courses</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/blogs'}
                                linkName={'Blogs'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-list-alt menu-icon"></i>}
                            />
                        </li>

                        <li>
                            <NavBarLink
                                link={'/bsl/admin/pages'}
                                linkName={'Pages'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-th-list menu-icon"></i>}
                            />
                        </li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/messages'}
                                linkName={'Contact Messages'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-envelope menu-icon"></i>}
                            />
                        </li>
                        <li>
                            <NavBarLink
                                link={'/bsl/admin/subscribers'}
                                linkName={'Subscribers'}
                                hasSubMenu={false}
                                menuIcon={<i className="fa fa-paper-plane menu-icon"></i>}
                            />
                        </li>

                    </ul>
                </div>
            </Scrollbars>
        </div>
    );
}

export default Index;
