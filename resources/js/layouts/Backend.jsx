import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import '../../backend-assets/css/style.css';

function Backend(props) {
    useEffect(()=>{
        let mainBody = document.querySelector('body');
        mainBody.dataset.themeVersion = 'light';
        mainBody.dataset.layout = 'vertical';
        mainBody.dataset.navHeaderbg = 'color_1';
        mainBody.dataset.headerbg = 'color_1';
        mainBody.dataset.sidebarStyle = 'full';
        mainBody.dataset.sibebarbg = 'color_1';
        mainBody.dataset.idebarPosition = 'static';
        mainBody.dataset.headerPosition = 'static';
        mainBody.dataset.container = 'wide';
        mainBody.setAttribute('direction', 'ltr')
    },[])

    return (
        <Outlet/>
    );
}

export default Backend;
