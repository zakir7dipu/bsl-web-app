import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";

function Attribute({item}) {
    const {title, icon, hoverIcon, brief, bg} = item
    return (
        <div className={`col-lg-6 col-md-12`}>
            <div className={`services-item ${bg && bg}`}>
                <div className="services-icon">
                    <div className="image-part">
                        <img className="main-img"
                             src={useInternalLink(`/${icon}`)}
                             alt=""
                        />
                        <img className="hover-img"
                             src={useInternalLink(`/${hoverIcon}`)}
                             alt=""
                        />
                    </div>
                </div>
                <div className="services-content">
                    <div className="services-text">
                        <h3 className="title" style={{float: "none", textTransform:"capitalize"}}><Link to="#">{title}</Link>
                        </h3>
                    </div>
                    <div className="services-desc">
                        <p>{brief}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attribute;
