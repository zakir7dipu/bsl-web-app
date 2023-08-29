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
                                </ul>
                            </NavBarLink>

                        </li>
                        <li className="nav-label">Apps</li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Email'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-envelope menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="#">Inbox</Link></li>
                                    <li><Link to="#">Read</Link></li>
                                    <li><Link to="#">Compose</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Apps'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-screen-tablet menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="#">Profile</Link></li>
                                    <li><Link to="#">Calender</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Charts'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-graph menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="tol">Flot</Link></li>
                                    <li><Link to="to">Morris</Link></li>
                                    <li><Link to="to">Chartjs</Link></li>
                                    <li><Link to="to">Chartist</Link></li>
                                    <li><Link to="to">Sparkline</Link></li>
                                    <li><Link to="to">Peity</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li className="nav-label">UI Components</li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'UI Components'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-grid menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="#">Accordion</Link></li>
                                    <li><Link to="#">Alert</Link></li>
                                    <li><Link to="#">Badge</Link></li>
                                    <li><Link to="#">Button</Link></li>
                                    <li><Link to="#">Button Group</Link></li>
                                    <li><Link to="#">Cards</Link></li>
                                    <li><Link to="#">Carousel</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Widget'}
                                hasSubMenu={false}
                                menuIcon={<i className="icon-badge menu-icon"></i>}
                            />
                        </li>
                        <li className="nav-label">Forms</li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Forms'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-note menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="#">Basic Form</Link></li>
                                    <li><Link to="#">Form Validation</Link></li>
                                    <li><Link to="#">Step Form</Link></li>
                                    <li><Link to="#">Editor</Link></li>
                                    <li><Link to="#">Picker</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li className="nav-label">Table</li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Table'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-menu menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="#" aria-expanded="false">Basic Table</Link></li>
                                    <li><Link to="#" aria-expanded="false">Data Table</Link></li>
                                </ul>
                            </NavBarLink>
                        </li>
                        <li className="nav-label">Pages</li>
                        <li>
                            <NavBarLink
                                link='#'
                                linkName={'Pages'}
                                hasSubMenu={true}
                                menuIcon={<i className="icon-notebook menu-icon"></i>}
                            >
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="#">Login</Link></li>
                                    <li><Link to="#">Register</Link></li>
                                    <li><Link to="#">Lock Screen</Link></li>
                                    <li>
                                        <NavBarLink
                                            link='#'
                                            linkName={'Error'}
                                            hasSubMenu={true}
                                            // menuIcon={<i className="icon-menu menu-icon"></i>}
                                        >
                                            <ul aria-expanded="false" className="collapse">
                                                <li><Link to="#">Error 404</Link></li>
                                                <li><Link to="#">Error 403</Link></li>
                                                <li><Link to="#">Error 400</Link></li>
                                                <li><Link to="#">Error 500</Link></li>
                                                <li><Link to="#">Error 503</Link></li>
                                            </ul>
                                        </NavBarLink>
                                        {/*<Link className="has-arrow" to="#"*/}
                                        {/*      aria-expanded="false">Errors</Link>*/}
                                        {/*<ul aria-expanded="false" className="collapse">*/}
                                        {/*    <li><Link to="#">Errors 404</Link></li>*/}
                                        {/*    <li><Link to="#">Errors 403</Link></li>*/}
                                        {/*    <li><Link to="#">Errors 400</Link></li>*/}
                                        {/*    <li><Link to="#">Errors 500</Link></li>*/}
                                        {/*    <li><Link to="#">Errors 503</Link></li>*/}
                                        {/*</ul>*/}
                                    </li>
                                </ul>
                            </NavBarLink>
                        </li>
                    </ul>
                </div>
            </Scrollbars>
        </div>
    );
}

export default Index;
