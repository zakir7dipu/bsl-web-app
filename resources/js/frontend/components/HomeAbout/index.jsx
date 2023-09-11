import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAboutSettings} from "../../../featurs/Settings/SettingsSlice.js";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import {isOdd, uid, useInternalLink} from "../../../lib/helper.js";
import Attribute from "./Attribute.jsx";
import HomeAbout from "../Skeletons/HomeAbout.jsx";

function Index(props) {
    const {isLoading, aboutSetting} = useSelector(state => state.generalSettings)
    const {title, brief, clients, project, attributes} = aboutSetting
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAboutSettings())
    }, [dispatch])

    return (
        isLoading ? <HomeAbout/>:
        <div id="rs-about" className="rs-about pt-10 md-pt-7">
            {/*pt-120 md-pt-70*/}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="sec-title mb-50">
                            <div className="sub-text style4-bg">About Us</div>
                            <h2 className="title pb-20">{title || ""}</h2>
                            <div className="desc">{brief || ""}</div>
                        </div>

                        <div className="rs-counter style3">
                            <div className="container">
                                <div className="counter-top-area">
                                    <div className="row">
                                        <div className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">
                                            <div className="counter-list">
                                                <div className="counter-text">
                                                    <div className="count-number">
                                                        <span className="rs-count plus orange-color">{clients || ""}</span>
                                                    </div>
                                                    <h3 className="title">Happy Clients</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 sm-pr-0 sm-pl-0">
                                            <div className="counter-list">
                                                <div className="counter-text">
                                                    <div className="count-number">
                                                        <span className="rs-count plus">{project || ""}</span>
                                                    </div>
                                                    <h3 className="title">Project Delivered</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="rs-services style3 md-pt-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 pr-10 pt-40 sm-pt-0 sm-pr-0 sm-pl-0">
                                        <Row>
                                            {attributes && attributes.map((item, index)=>{
                                                return (
                                                    <Attribute
                                                        item={item}
                                                        index={index}
                                                        key={uid()}
                                                    />
                                                )
                                            })}
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
