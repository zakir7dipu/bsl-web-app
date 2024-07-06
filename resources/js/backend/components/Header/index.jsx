import React from 'react';
import NavControl from "./NavControl.jsx";
import HeaderRight from "./HeaderRight.jsx";

function Index(props) {
    return (
        <div className="header">
            <div className="header-content clearfix">

                <NavControl/>

                <div className="header-left"></div>

                <HeaderRight/>
            </div>
        </div>
);
}

export default Index;
