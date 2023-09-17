import React, {useEffect, useState} from 'react';
import Style from './Top.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {AiFillLinkedin, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import {BiLogoFacebook} from "react-icons/bi";
import {LiaPhoneVolumeSolid} from "react-icons/lia";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BsSendFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {FiYoutube} from "react-icons/fi";
import {infoMessage, uid, useInternalLink, warningMessage} from "../../../lib/helper.js";
import {createSubscriber} from "../../../featurs/Subscribers/SubscribersSlice.js";
import {fetchAllPageData} from "../../../featurs/Pages/PageSlice.js";

function Top({newsletter, general, contact, backlink}) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();

    const resetHandler = () => {
        setEmail('');
    }

    const handelNewsletter = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!email) {
            warningMessage("Email is required.")
        } else {
            formData.append("email", email);
        }

        if (email) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createSubscriber(formData))
        }
        resetHandler();
    }

    const {
        pages,
    } = useSelector((state) => state.pagesReducer);

    useEffect(() => {
        dispatch(fetchAllPageData());
    }, [dispatch]);

    return (
        <div className={Style.footerTop}>
            <Container>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <div className={Style.footerLogo}>
                            <Link to="/">
                                <img src={useInternalLink(`/${general?.site_logo}`)} alt=""/>
                            </Link>
                        </div>
                        <div className={Style.textwidget}><p style={{textAlign: "justify"}}>{general?.footer_detail}</p>
                        </div>
                        <ul className={Style.footerSocial}>
                            {backlink?.facebook && <li><a href={backlink?.facebook} target="_blank"><BiLogoFacebook
                                className={Style.socialIcon}/></a></li>}
                            {backlink?.linkedin && <li><a href={backlink?.linkedin} target="_blank"><AiFillLinkedin
                                className={Style.socialIcon}/></a></li>}
                            {backlink?.instagram &&
                                <li><a href={backlink?.instagram} target="_blank"><AiOutlineInstagram
                                    className={Style.socialIcon}/></a></li>}
                            {backlink?.youtube && <li><a href={backlink?.youtube} target="_blank"><FiYoutube
                                className={Style.socialIcon}/></a></li>}
                        </ul>
                    </Col>

                    <Col lg={8} md={12} sm={12} className="p-0 m-0">
                        <Row className="p-0 m-0">
                            <Col lg={3} md={12} sm={12}>
                                <h3 className={Style.widgetTitle}>Our Hot Links</h3>
                                <ul className={Style.siteMap}>

                                    {pages && pages.map(item =>
                                        <li key={uid()}>
                                            <NavLink
                                                to={`page/${item?.slug}`}>{item?.title}</NavLink>
                                        </li>
                                    )}
                                </ul>
                            </Col>

                            <Col lg={9} md={12} sm={12} className="p-0 m-0">
                                <Row className="p-0 m-0">
                                    <Col lg={6} md={12} sm={12}>
                                        <h3 className={Style.widgetTitle}>Contact Info</h3>
                                        <ul className={Style.addressWidget}>
                                            <li>
                                                <HiOutlineLocationMarker className={Style.icon}/>
                                                <div className={Style.desc}>{contact?.address}</div>
                                            </li>
                                            <li>
                                                <LiaPhoneVolumeSolid className={Style.icon}/>
                                                <div className={Style.desc}>
                                                    <a href={`tel:${contact?.phone}`}>{contact?.phone?.replace('0', '(+880)')}</a>
                                                </div>
                                            </li>
                                            <li>
                                                <AiOutlineMail className={Style.icon}/>
                                                <div className={Style.desc}>
                                                    <a href={`mailto:${contact?.mail}`}>{contact?.mail}</a>
                                                </div>
                                            </li>
                                            {/*<li>*/}
                                            {/*    <FaRegClock className={Style.icon}/>*/}
                                            {/*    <div className={Style.desc}>*/}
                                            {/*        Opening Hours: {contact?.open_time}*/}
                                            {/*    </div>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </Col>

                                    <Col lg={6} md={12} sm={12}>
                                        <h3 className={Style.widgetTitle}>{newsletter?.title}</h3>
                                        <p className={Style.widgetDesc}>{newsletter?.text}</p>
                                        <form onSubmit={handelNewsletter}>
                                            <p className={Style.subscriptionFrom}>
                                                <input type="email" placeholder="Your email address" required
                                                       onChange={e => setEmail(e.target.value)}/>
                                                <button type="submit"><BsSendFill className={Style.send}/></button>
                                            </p>
                                        </form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Top;
