import React, {createRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useInternalLink} from "../../../lib/helper.js";
import {humburgerNavAction} from "../../../featurs/NavAction/NavSlice.js";

function CanvasMenu({general, contact, backlink}) {
    const body = document.querySelector("body")
    const {humburgerNavExpander} = useSelector(state => state.navAction)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (humburgerNavExpander) {
            body.classList.add("nav-expanded")
        } else {
            body.classList.remove("nav-expanded")
        }
    },[humburgerNavExpander])

    return (
        <nav className="right_menu_togle hidden-md" style={{height: "100%"}}>
            <div className="close-btn" style={{padding: "35px 10px 20px"}}>
                <div className="nav-link">
                    <Link id="nav-close" className="humburger nav-expander" to="#" onClick={e=>{
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
                </div>
            </div>
            <div className="canvas-logo">
                <Link to="/"><img src={useInternalLink(`/${general?.site_logo}`) || ""} alt="logo" style={{maxHeight: "65px"}}/></Link>
            </div>
            <div className="offcanvas-text">
                <p>{general?.footer_detail}</p>
            </div>
            <div className="canvas-contact">
                <div className="address-area">
                    <div className="address-list">
                        <div className="info-icon">
                            <i className="flaticon-location"></i>
                        </div>
                        <div className="info-content">
                            <h4 className="title" style={{float:"none"}}>Address</h4>
                            <em>{contact?.address}</em>
                        </div>
                    </div>
                    <div className="address-list">
                        <div className="info-icon">
                            <i className="flaticon-email"></i>
                        </div>
                        <div className="info-content">
                            <h4 className="title" style={{float:"none"}}>Email</h4>
                            <em><a href={`mailto:${contact?.mail}`}>{contact?.mail}</a></em>
                        </div>
                    </div>
                    <div className="address-list">
                        <div className="info-icon">
                            <i className="flaticon-call"></i>
                        </div>
                        <div className="info-content">
                            <h4 className="title" style={{float:"none"}}>Phone</h4>
                            <em><a href={`tel:${contact?.phone}`}>{contact?.phone}</a></em>
                        </div>
                    </div>
                </div>
                <ul className="social">
                    {backlink?.facebook && <li><a href={backlink?.facebook}><i className="fa fa-facebook"></i></a></li>}
                    {backlink?.linkedin && <li><a href={backlink?.linkedin}><i className="fa fa-linkedin"></i></a></li>}
                    {backlink?.instagram && <li><a href={backlink?.instagram}><i className="fa fa-instagram"></i></a></li>}
                    {backlink?.youtube && <li><a href={backlink?.youtube}><i className="fa fa-youtube"></i></a></li>}
                </ul>
            </div>
        </nav>
    );
}

export default CanvasMenu;
