import React from 'react';
import effectImage from "../../../../frontend-assets/images/about/effect-1.png";
import dottedImage from "../../../../frontend-assets/images/about/dotted-3.png";
import {useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";

function Index({about}) {
    const {title, description, image, btn_text, btn_url} = about;
    return (
        <>
            <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 md-mb-30">
                            <div className="rs-animation-shape">
                                <div className="images">
                                    <img src={useInternalLink(image)} alt=""/>
                                </div>
                                <div className="middle-image2">
                                    <img className="dance3" src={effectImage} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 md-pl-15">
                            <div className="contact-wrap">
                                <div className="sec-title mb-30">
                                    <div className="sub-text style-bg">About Us</div>
                                    <h2 className="title pb-38">
                                        {title}
                                    </h2>
                                    <div className="desc pb-35" dangerouslySetInnerHTML={{__html: description}}/>

                                </div>
                                <div className="btn-part">
                                    <Link className="readon learn-more" to={btn_url}>{btn_text}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-image">
                        <img className="top dance" src={dottedImage} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
