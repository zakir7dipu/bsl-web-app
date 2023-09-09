import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchIndustrySettings} from "../../../featurs/Settings/SettingsSlice.js";
import {fetchAllIndustries} from "../../../featurs/Industries/IndustriesSlice.js";
import Items from "./Items.jsx";
import {uid} from "../../../lib/helper.js";
import {Row} from "react-bootstrap";

function Index(props) {
    const {industry} = useSelector(state => state.generalSettings)
    const {isLoading, industries} = useSelector(state => state.industriesReducer)
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
                <div className="all-services" style={{width:"100%"}}>
                    {isLoading && ""}
                    {industries && industries.map(item=><Items
                        info={item}
                        key={uid()}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default Index;
