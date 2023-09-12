import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";

function ServiceProductItem({product}) {
    const {title, image_link} = product;

    return (
        <div className="col-lg-3 col-md-6 pb-20">
            <div className="blog-item">
                <div className="blog-img text-center" style={{height:"200px"}}>
                    <img style={{maxHeight:"200px"}} src={useInternalLink(image_link)} alt=""/>
                </div>
                <div className="blog-content text-center">
                    <h4 className="blog-title" style={{fontSize:"18px !important"}}>{title}</h4>
                </div>
            </div>
        </div>
    );
}

export default ServiceProductItem;
