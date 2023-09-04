import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSliderSettings} from "../../../featurs/Settings/SettingsSlice.js";
import {useInternalLink} from "../../../lib/helper.js";
import {videoModuleAction} from "../../../featurs/NavAction/NavSlice.js";

function Index(props) {
    const {isLoading, sliderSetting} = useSelector(state => state.generalSettings)
    const dispatch = useDispatch()

    const handelVideoAction = (e) => {
        e.preventDefault()
        dispatch(videoModuleAction(sliderSetting?.link))
    }

    useEffect(()=>{
        dispatch(fetchSliderSettings())
    },[dispatch])
    return (
        <div className="rs-banner style3 rs-rain-animate modify1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            {sliderSetting?.link && <div className="rs-videos">
                                <div className="animate-border white-color style3">
                                    <Link className="popup-border popup-videos"
                                          to={sliderSetting?.link} onClick={handelVideoAction}>
                                        <i className="fa fa-play"></i>
                                    </Link>
                                </div>
                            </div>}

                            {sliderSetting?.title && <h1 className="title">{sliderSetting?.title}</h1>}

                            {sliderSetting?.text && <p className="desc">{sliderSetting?.text}</p>}

                            {sliderSetting?.btn_text && <ul className="banner-btn">
                                <li><a className="readon started" href={sliderSetting?.btn_link}>{sliderSetting?.btn_text}</a></li>
                            </ul>}

                        </div>
                    </div>
                </div>
            </div>
            <div className="images-part hidden-md">
                <img src={useInternalLink(`/${sliderSetting?.image_link}`)} alt=""/>
            </div>
            <div className="line-inner style2">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Index;
