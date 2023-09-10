import React from 'react';
import Style from './Footer.module.css'
import footerBg from "../../../../frontend-assets/images/bg/footer-bg.png"
import {useSelector} from "react-redux";
import Top from "./Top.jsx";
import Bottom from "./Bottom.jsx";

function Index(props) {
    const {isLoading, generalSetting} = useSelector(state => state.generalSettings)
    return (
        <footer id="FooterSec" className={Style.footer} style={{backgroundImage: `url(${footerBg})`}}>
            <Top
                newsletter={generalSetting?.newsletter}
                general={generalSetting?.general}
                contact={generalSetting?.contact}
                backlink={generalSetting?.backlink}
            />
            <Bottom
                general={generalSetting?.general}
            />
        </footer>
    );
}

export default Index;
