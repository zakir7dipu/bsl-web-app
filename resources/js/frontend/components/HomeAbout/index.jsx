import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAboutSettings} from "../../../featurs/Settings/SettingsSlice.js";

function Index(props) {
    const {} = useSelector(state => state.generalSettings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAboutSettings())
    }, [dispatch])
    return (
        <div id="rs-about" className="rs-about pt-120 md-pt-70">
            <div className="container">
                {/*<div className="row align-items-center">*/}
                {/*    <div className="col-lg-5">*/}
                {/*        <div className="sec-title mb-50">*/}
                {/*            <div className="sub-text style4-bg">About Us</div>*/}
                {/*            <h2 className="title pb-20">*/}
                {/*                Over 25+ Years Helping Brands to Reach Full Potential*/}
                {/*            </h2>*/}
                {/*            <div className="desc">*/}
                {/*                Over 25 years working in IT services developing software applications and mobile apps*/}
                {/*                for*/}
                {/*                clients all over the world. From its medieval origins to the digital era, learn*/}
                {/*                everything*/}
                {/*                there is to know about the ubiquitous lorem ipsum passage. Creation timelines for the*/}
                {/*                standard lorem ipsum passage vary, with some citing the 15th century*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <!-- Counter Section Start -->*/}
                {/*        <div className="rs-counter style3">*/}
                {/*            <div className="container">*/}
                {/*                <div className="counter-top-area">*/}
                {/*                    <div className="row">*/}
                {/*                        <div className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">*/}
                {/*                            <div className="counter-list">*/}
                {/*                                <div className="counter-text">*/}
                {/*                                    <div className="count-number">*/}
                {/*                                        <span className="rs-count plus orange-color">450</span>*/}
                {/*                                    </div>*/}
                {/*                                    <h3 className="title">Happy Clients</h3>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-sm-6 sm-pr-0 sm-pl-0">*/}
                {/*                            <div className="counter-list">*/}
                {/*                                <div className="counter-text">*/}
                {/*                                    <div className="count-number">*/}
                {/*                                        <span className="rs-count plus">750</span>*/}
                {/*                                    </div>*/}
                {/*                                    <h3 className="title">Project Delivered</h3>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <!-- Counter Section End -->*/}
                {/*    </div>*/}
                {/*    <div className="col-lg-7">*/}
                {/*        <!-- Services Section Start -->*/}
                {/*        <div className="rs-services style3 md-pt-50">*/}
                {/*            <div className="container">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-md-6 pr-10 pt-40 sm-pt-0 sm-pr-0 sm-pl-0">*/}
                {/*                        <div className="services-item mb-20">*/}
                {/*                            <div className="services-icon">*/}
                {/*                                <div className="image-part">*/}
                {/*                                    <img className="main-img"*/}
                {/*                                         src="assets/images/services/style3/main-img/1.png"*/}
                {/*                                         alt="">*/}
                {/*                                        <img className="hover-img"*/}
                {/*                                             src="assets/images/services/style3/hover-img/1.png" alt="">*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="services-content">*/}
                {/*                                <div className="services-text">*/}
                {/*                                    <h3 className="title"><a href="web-development.html">High-quality*/}
                {/*                                        Code</a>*/}
                {/*                                    </h3>*/}
                {/*                                </div>*/}
                {/*                                <div className="services-desc">*/}
                {/*                                    <p>*/}
                {/*                                        At vero eos et accusamus etiusto odio praesentium accusamus.*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="services-item cyan-bg">*/}
                {/*                            <div className="services-icon">*/}
                {/*                                <div className="image-part">*/}
                {/*                                    <img className="main-img"*/}
                {/*                                         src="assets/images/services/style3/main-img/2.png"*/}
                {/*                                         alt="">*/}
                {/*                                        <img className="hover-img"*/}
                {/*                                             src="assets/images/services/style3/hover-img/2.png" alt="">*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="services-content">*/}
                {/*                                <div className="services-text">*/}
                {/*                                    <h3 className="title"><a href="web-development.html">Full-stack*/}
                {/*                                        teams</a>*/}
                {/*                                    </h3>*/}
                {/*                                </div>*/}
                {/*                                <div className="services-desc">*/}
                {/*                                    <p>*/}
                {/*                                        At vero eos et accusamus etiusto odio praesentium accusamus.*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-md-6 pl-10 sm-pr-0 sm-pl-0 sm-mt-20">*/}
                {/*                        <div className="services-item gold-bg mb-20">*/}
                {/*                            <div className="services-icon">*/}
                {/*                                <div className="image-part">*/}
                {/*                                    <img className="main-img"*/}
                {/*                                         src="assets/images/services/style3/main-img/3.png"*/}
                {/*                                         alt="">*/}
                {/*                                        <img className="hover-img"*/}
                {/*                                             src="assets/images/services/style3/hover-img/3.png" alt="">*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="services-content">*/}
                {/*                                <div className="services-text">*/}
                {/*                                    <h3 className="title"><a href="web-development.html">Agile*/}
                {/*                                        Approach</a></h3>*/}
                {/*                                </div>*/}
                {/*                                <div className="services-desc">*/}
                {/*                                    <p>*/}
                {/*                                        At vero eos et accusamus etiusto odio praesentium accusamus.*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="services-item blue-bg">*/}
                {/*                            <div className="services-icon">*/}
                {/*                                <div className="image-part">*/}
                {/*                                    <img className="main-img"*/}
                {/*                                         src="assets/images/services/style3/main-img/4.png"*/}
                {/*                                         alt="">*/}
                {/*                                        <img className="hover-img"*/}
                {/*                                             src="assets/images/services/style3/hover-img/4.png" alt="">*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="services-content">*/}
                {/*                                <div className="services-text">*/}
                {/*                                    <h3 className="title"><a href="web-development.html">High-quality*/}
                {/*                                        Code</a>*/}
                {/*                                    </h3>*/}
                {/*                                </div>*/}
                {/*                                <div className="services-desc">*/}
                {/*                                    <p>*/}
                {/*                                        At vero eos et accusamus etiusto odio praesentium accusamus.*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <!-- Services Section End -->*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Index;
