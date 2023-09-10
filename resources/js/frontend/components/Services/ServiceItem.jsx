import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";

function ServiceItem({info}) {
    const {title, slug, image_link, brief} = info;
    const servicesCardBg = ["pink-light-bg", "blue2-bg", "paste2-bg", "purple2-bg", "cyan2-bg", "pink2-bg"]
    const random = Math.floor(Math.random() * servicesCardBg.length);
    return (
        <div className="col-lg-4 col-md-6 mb-30">
            <div className={`services-item ${servicesCardBg[random]}`}>
                <div className="services-icon">
                    <div className="image-part">
                        <img className="main-img" src={useInternalLink(image_link)} alt={title}/>
                        <img className="hover-img" src={useInternalLink(image_link)} alt={title} style={{
                            msFilter: "grayscale(100%)",
                            filter: "grayscale(100%)",
                            transition: "all 0.5s ease"}}/>
                    </div>
                </div>
                <div className="services-content">
                        <div className="services-text">
                            <h3 className="title" style={{float: "none"}}><Link to={`service/${slug}/details`}>{title}</Link></h3>
                        </div>
                        <div className="services-desc">
                            <p dangerouslySetInnerHTML={{__html: brief}}/>
                        </div>
                        <div className="services-button">
                            <Link to={`service/${slug}/details`}>Read More</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ServiceItem;
