import React from 'react';
import {Link} from "react-router-dom";
import {useInternalLink} from "../../../lib/helper.js";

function Item({info}) {
    const {name, image_link} = info
    return (
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
            <div className="technology-item">
                <Link to="#">
                    <div className="logo-img">
                        <img src={useInternalLink(image_link)} alt=""/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Item;
