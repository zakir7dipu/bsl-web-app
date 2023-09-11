import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllIndustries} from "../../../featurs/Industries/IndustriesSlice.js";
import {fetchTechnologySettings} from "../../../featurs/Settings/SettingsSlice.js";
import {fetchAllTechnology} from "../../../featurs/Technology/TechnologySlice.js";
import Item from "./Item.jsx";
import {uid} from "../../../lib/helper.js";
import TechnologySkel from "../Skeletons/TechnologySkel.jsx";

function Index(props) {
    const {technology} = useSelector(state => state.generalSettings)
    const {isLoading, technologies} = useSelector(state => state.technologyReducer)
    const {title, sub_text, limit} = technology
    const dispatch = useDispatch()

    useEffect(()=>{
        if(Object.keys(technology).length) {
            dispatch(fetchAllTechnology(limit))
        }
    },[technology, limit])

    useEffect(() => {
        dispatch(fetchTechnologySettings())
    }, [dispatch])

    return (
        isLoading ? <TechnologySkel/> :
        <div className="rs-technology gray-color pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{sub_text}</span>
                    <h2 className="title title2" style={{float: "none"}}>{title}</h2>
                </div>
                <div className="row">
                    {technologies?.map(item=><Item
                        info={item}
                        key={uid()}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default Index;
