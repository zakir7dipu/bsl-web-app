import React from 'react';
import {Link} from "react-router-dom";
import bizzIcon from "../../../../image/bizz-icon.png";
import bizzLogo from "../../../../image/bizz-logo.png";

function Index(props) {
    return (
        <div className="nav-header">
            <div className="brand-logo">
                <Link to="/" className="p-x d-flex justify-content-center p-2">
                    <b className="logo-abbr"><img style={{width: '60px'}} src={bizzIcon} alt=""/> </b>
                    <span className="logo-compact"><img style={{width: '120px'}} src={bizzLogo} alt=""/></span>
                    <span className="brand-title">
                        <img style={{width: '120px'}} src={bizzLogo} alt=""/>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Index;
