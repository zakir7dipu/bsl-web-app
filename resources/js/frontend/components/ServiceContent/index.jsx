import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Index({info}) {
    const {title, brief, description, image_link} = info;
    const {isLoading, generalSetting} = useSelector(state => state.generalSettings)

    return (
        <div className="rs-case-studies-single pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 md-mb-50">
                        <div className="services-img">
                            <img src={useInternalLink(image_link)} alt=""/>
                        </div>

                        <h2 className="mt-34">{title}</h2>
                        <p dangerouslySetInnerHTML={{__html: brief}}/>

                        <p dangerouslySetInnerHTML={{__html: description}}/>
                    </div>
                    <div className="col-lg-4 pl-32 md-pl-15">
                        <div className="services-add">
                            <div className="address-item mb-35">
                                <div className="address-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                            </div>
                            <h2 className="title" style={{float: "none"}}>Have any Questions? <br/> Call us Today</h2>
                            <div className="contact">
                                <Link
                                    to={`tel:${generalSetting?.contact?.phone}`}>{generalSetting?.contact?.phone}</Link>
                            </div>
                        </div>
                    </div>
                    <div/>
                </div>
            </div>
        </div>
    );
}

export default Index;
