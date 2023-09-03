import React from 'react';
import Style from "./Preloader.module.css"

function Index(props) {
    return (
        <div className={Style.loader}>
            <div className={Style.loaderContainer}></div>
        </div>
    );
}

export default Index;
