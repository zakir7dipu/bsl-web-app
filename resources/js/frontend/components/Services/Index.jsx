import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllServices} from "../../../featurs/Service/ServiceSlice.js";
import {uid, useInternalLink} from "../../../lib/helper.js";
import ServiceItem from "./ServiceItem.jsx";

function Index(props) {
    const {
        isLoading,
        services
    } = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllServices());
    }, [dispatch]);

    return (
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">Services</span>
                    <h2 className="title title2">
                        Explore Our All Services We Offer to customers
                    </h2>
                </div>
                <div className="row">
                    {isLoading && ""}
                    {services && services.map(item =>
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