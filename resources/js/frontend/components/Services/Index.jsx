import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchParentServices} from "../../../featurs/Service/ServiceSlice.js";
import {uid} from "../../../lib/helper.js";
import ServiceItem from "./ServiceItem.jsx";
import {fetchServiceSettings} from "../../../featurs/Settings/SettingsSlice.js";

function Index(props) {
    const {
        isLoading,
        parentServices
    } = useSelector((state) => state.serviceReducer);

    const {serviceSetting} = useSelector((state)=>state.generalSettings);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchServiceSettings());
    },[dispatch])

    useEffect(() => {
        dispatch(fetchParentServices(serviceSetting?serviceSetting?.limit:3));
    }, [dispatch]);

    return (
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{serviceSetting?.sub_text}</span>
                    <h2 className="title title2" style={{float: "none"}}>
                        {serviceSetting?.title}
                    </h2>
                </div>
                <div className="row">
                    {isLoading && ""}
                    {parentServices && parentServices.map(item =>
                        <ServiceItem
                            info={item}
                            key={uid()}
                        />)}
                    </div>
            </div>
        </div>
    );
}

export default Index;
