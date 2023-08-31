import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSliderSettings} from "../../../featurs/Settings/SettingsSlice.js";
import {useInternalLink} from "../../../lib/helper.js";

function Index(props) {
    const {isLoading, sliderSetting} = useSelector(state => state.generalSettings)
    console.log(sliderSetting)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchSliderSettings())
    },[dispatch])
    return (
        <div className="rs-banner style3 rs-rain-animate modify1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <div className="rs-videos">
                                <div className="animate-border white-color style3">
                                    <Link className="popup-border popup-videos"
                                       to="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                        <i className="fa fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                            <h1 className="title">We Are Digital Agency & Technology Solution </h1>
                            <p className="desc">
                                We are leading technology solutions providing company all over the world doing over 40
                                years.
                            </p>
                            <ul className="banner-btn">
                                <li><Link className="readon started" to="about.html">Get Started</Link></li>
                            </ul>
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
