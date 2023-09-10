import React from 'react';
import Top from "./Top.jsx";
import CanvasMenu from "./CanvasMenu.jsx";
import {useSelector} from "react-redux";

function Index(props) {
    const {isLoading, generalSetting} = useSelector(state => state.generalSettings)
    return (
        <div className="full-width-header">
            <Top
                loading={isLoading}
                general={generalSetting?.general}
            />
            <CanvasMenu
                general={generalSetting?.general}
                contact={generalSetting?.contact}
                backlink={generalSetting?.backlink}
            />
        </div>
    );
}

export default Index;
