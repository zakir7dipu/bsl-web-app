import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import avatar from '../../../../image/default-avatar.png'
import DropdownNav from "./DropdownNav.jsx";
import {useDispatch, useSelector} from "react-redux";
import {rightHeaderAction} from "../../../featurs/MenuAction/MenuSlice.js";
import {fetchLogout} from "../../../featurs/AuthAction/AuthSlice.js";

function HeaderRight(props) {
    const {rightHeader} = useSelector(state => state.menuAction)
    const dispatch = useDispatch();

    const dropDownMenuAction = (e,btnName) => {
        e.preventDefault()
        dispatch(rightHeaderAction(btnName))
    }

    const dropDownMenuViable = (toggleButton) => {
        toggleButton.classList.add('show')
        toggleButton.querySelector('.dropdown-menu').classList.add('show')
    }

    const dropDownMenuHidable = (toggleButton) => {
        if(toggleButton) {
            if (toggleButton.classList.contains('show')) {
                toggleButton.classList.remove('show')
                toggleButton.querySelector('.dropdown-menu').classList.remove('show')
            }
        }
    }

    const logOutHandler = (e) => {
        e.preventDefault()
        dispatch(fetchLogout())
    }

    useEffect(()=>{
        let actions = Object.keys(rightHeader);
        actions.map(item=>{
            let toggleButton = document.querySelector(`.${item}`)
            if(rightHeader[item]) {
                dropDownMenuViable(toggleButton)
            } else {
                dropDownMenuHidable(toggleButton)
            }
        })
    },[rightHeader])

    return (
        <div className="header-right">
            <ul className="clearfix">
                <DropdownNav
                    icon={<i className="mdi mdi-email-outline"></i>}
                    menuName={'Messages'}
                    badgeStyle={'gradient-1'}
                    newMessageCount={3}
                    addClass={'messageBtn'}
                >
                    <div className="dropdown-content-body">
                        <ul>
                            <li className="notification-unread">
                                <Link to="#">
                                    <img className="float-left mr-3 avatar-img" src={avatar} alt=""/>
                                    <div className="notification-content">
                                        <div className="notification-heading">Saiful Islam</div>
                                        <div className="notification-timestamp">08 Hours ago</div>
                                        <div className="notification-text">Hi Teddy, Just wanted to let
                                            you ...
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="notification-unread">
                                <Link to="#">
                                    <img className="float-left mr-3 avatar-img" src={avatar} alt=""/>
                                    <div className="notification-content">
                                        <div className="notification-heading">Adam Smith</div>
                                        <div className="notification-timestamp">08 Hours ago</div>
                                        <div className="notification-text">Can you do me a favour?</div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img className="float-left mr-3 avatar-img" src={avatar} alt=""/>
                                    <div className="notification-content">
                                        <div className="notification-heading">Barak Obama</div>
                                        <div className="notification-timestamp">08 Hours ago</div>
                                        <div className="notification-text">Hi Teddy, Just wanted to let
                                            you ...
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img className="float-left mr-3 avatar-img" src={avatar} alt=""/>
                                    <div className="notification-content">
                                        <div className="notification-heading">Hilari Clinton</div>
                                        <div className="notification-timestamp">08 Hours ago</div>
                                        <div className="notification-text">Hello</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </DropdownNav>

                <DropdownNav
                    icon={<i className="mdi mdi-bell-outline"></i>}
                    menuName={'Notifications'}
                    badgeStyle={'gradient-2'}
                    newMessageCount={4}
                    addClass={'notificationBtn'}
                >
                    <div className="dropdown-content-body">
                        <ul>
                            <li>
                                <Link to="#">
                                                <span className="mr-3 avatar-icon bg-success-lighten-2"><i
                                                    className="icon-present"></i></span>
                                    <div className="notification-content">
                                        <h6 className="notification-heading">Events near you</h6>
                                        <span className="notification-text">Within next 5 days</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                                <span className="mr-3 avatar-icon bg-danger-lighten-2"><i
                                                    className="icon-present"></i></span>
                                    <div className="notification-content">
                                        <h6 className="notification-heading">Event Started</h6>
                                        <span className="notification-text">One hour ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                                <span className="mr-3 avatar-icon bg-success-lighten-2"><i
                                                    className="icon-present"></i></span>
                                    <div className="notification-content">
                                        <h6 className="notification-heading">Event Ended Successfully</h6>
                                        <span className="notification-text">One hour ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                                <span className="mr-3 avatar-icon bg-danger-lighten-2"><i
                                                    className="icon-present"></i></span>
                                    <div className="notification-content">
                                        <h6 className="notification-heading">Events to Join</h6>
                                        <span className="notification-text">After two days</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </DropdownNav>

                <li className="icons dropdown d-none d-md-flex languageBtn">
                    <Link to="#" className="log-user" data-toggle="dropdown" onClick={e => dropDownMenuAction(e, 'languageBtn')}>
                        <span>English</span> <i className="fa fa-angle-down f-s-14" aria-hidden="true"></i>
                    </Link>
                    <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                        <div className="dropdown-content-body">
                            <ul>
                                <li><Link to="#">English</Link></li>
                                <li><Link to="#">Dutch</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li className="icons dropdown profileBtn">
                    <div className="user-img c-pointer position-relative" data-toggle="dropdown"
                         onClick={e => dropDownMenuAction(e, 'profileBtn')}>
                        <span className="activity active"></span>
                        <img src={avatar} height="40" width="40" alt=""/>
                    </div>
                    <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                        <div className="dropdown-content-body">
                            <ul>
                                <li>
                                    <Link to="app-profile.html">
                                        <i className="icon-user"></i>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="icon-envelope-open"></i> <span>Inbox</span>
                                        <div className="badge gradient-3 badge-pill gradient-1">3</div>
                                    </Link>
                                </li>

                                <hr className="my-2"/>
                                <li>
                                    <Link to="page-lock.html">
                                        <i className="icon-lock"></i>
                                        <span>Lock Screen</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={logOutHandler}>
                                        <i className="icon-key"></i>
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HeaderRight;
