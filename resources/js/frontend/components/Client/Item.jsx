import React from 'react';
import {Link} from "react-router-dom";
import Style from "./Item.module.css"
import {useInternalLink} from "../../../lib/helper.js";

function Item({info}) {
    const {image_link} = info
    return (
        <div className={Style.logoImg}>
            <Link to="#">
                <img style={{width:"100%", height:"150px"}} className={Style.mainLogo} src={useInternalLink(image_link)} alt=""/>
            </Link>
        </div>
    );
}

export default Item;
