import React from 'react';
import '../../frontend-assets/css/main.css';
import Header from "../frontend/components/Header/index.jsx";
import {Outlet} from "react-router-dom"

function Frontend(props) {
    return (
        <div className="main-content">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Frontend;
