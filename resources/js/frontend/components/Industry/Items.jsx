import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";

function Items({info}) {
    const {name, image_link} = info
    return (
        <div className="services-item">
            <div className="services-wrap">
                <div className="services-icon">
                    <img src={useInternalLink(image_link)} alt=""/>
                </div>
                <div className="services-text col-12">
                    <h4 className="title">{name}</h4>
                </div>
            </div>
        </div>
    );
}

export default Items;
