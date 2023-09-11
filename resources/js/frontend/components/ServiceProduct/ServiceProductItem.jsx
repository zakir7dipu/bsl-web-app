import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";

function ServiceProductItem({product}) {
    const {title, image_link} = product;

    return (
        <div className="col-lg-4 col-md-6 mb-80">
            <div className="blog-item">
                <div className="blog-img text-center">
                    <img style={{height:"330px"}} src={useInternalLink(image_link)} alt=""/>
                </div>
                <div className="blog-content text-center">
                    <h2 className="blog-title pt-15">{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default ServiceProductItem;
