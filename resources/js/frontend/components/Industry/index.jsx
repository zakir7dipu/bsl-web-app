import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchIndustrySettings} from "../../../featurs/Settings/SettingsSlice.js";
import {fetchAllIndustries} from "../../../featurs/Industries/IndustriesSlice.js";
import Items from "./Items.jsx";
import {uid} from "../../../lib/helper.js";

function Index(props) {
    const {industry} = useSelector(state => state.generalSettings)
    const {isLoading, industries} = useSelector(state => state.industriesReducer)
    console.log(industries)
    const {title, sub_text, limit} = industry
    const dispatch = useDispatch()

    useEffect(()=>{
        if(Object.keys(industry).length) {
            dispatch(fetchAllIndustries(limit))
        }
    },[industry, limit])

    useEffect(()=>{
        dispatch(fetchIndustrySettings())
    },[dispatch])

    return (
        <div className="rs-industry pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{sub_text}</span>
                    <h2 className="title" style={{float:"none"}}>{title}</h2>
                </div>
                <div className="all-services">
                    {isLoading && ""}
                    {industries && industries.map(item=><Items
                        info={item}
                        key={uid()}
                    />)}

                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/2.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Fintech</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/3.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Healthcare</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/4.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Data Mining</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/5.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Machine learning</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/6.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Medical</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/7.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Entertainment</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/8.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">AI</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/9.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Manufacturing</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="services-item">*/}
                    {/*    <div className="services-wrap">*/}
                    {/*        <div className="services-icon">*/}
                    {/*            <img src="assets/images/technology/style3/10.png" alt="">*/}
                    {/*        </div>*/}
                    {/*        <div className="services-text">*/}
                    {/*            <h4 className="title">Logistics</h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Index;
