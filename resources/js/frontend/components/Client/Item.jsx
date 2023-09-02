import React from 'react';
import {Link} from "react-router-dom";
import Style from "./Item.module.css"

function Item({toLink, img}) {
    return (
        <div className={Style.logoImg}>
            <Link to={toLink}>
                <img className={Style.mainLogo} src={img} alt=""/>
            </Link>
        </div>
    );
}

export default Item;