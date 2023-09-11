import React from 'react';
import {Row} from "react-bootstrap";
import Attribute from "../HomeAbout/Attribute.jsx";
import {uid} from "../../../lib/helper.js";
import TextSkel from "./TextSkel.jsx";
import ImgSkel from "./ImgSkel.jsx";
import ProvidedServicesSkel from "./ProvidedServicesSkel.jsx";

function HomeAbout(props) {
    return (
        <div id="rs-about" className="rs-about pt-10 md-pt-7">
            {/*pt-120 md-pt-70*/}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="sec-title mb-50">
                            <div className="sub-text style4-bg">About Us</div>
                            <h2 className="title pb-20">
                                <TextSkel
                                    count={2.4}
                                    lineHeight={`46px`}
                                    height={`36px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </h2>
                            <div className="desc">
                                <TextSkel
                                    count={5.7}
                                    lineHeight={`46px`}
                                    height={`36px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </div>
                        </div>

                        <div className="rs-counter style3">
                            <div className="container">
                                <div className="counter-top-area">
                                    <div className="row">
                                        <div className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">
                                            <ImgSkel
                                                width={`100%`}
                                                height={`100px`}
                                                baseColor={`#cacaca`}
                                                highlightColor={`#949393`}
                                            />
                                        </div>
                                        <div className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">
                                            <ImgSkel
                                                width={`100%`}
                                                height={`100px`}
                                                baseColor={`#cacaca`}
                                                highlightColor={`#949393`}
                                            />
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
                                            <ProvidedServicesSkel count={4}/>
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

export default HomeAbout;
