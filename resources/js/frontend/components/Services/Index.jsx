import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchParentServices, getServicesForHomePage} from "../../../featurs/Service/ServiceSlice.js";
import {uid} from "../../../lib/helper.js";
import ServiceItem from "./ServiceItem.jsx";
import {fetchServiceSettings} from "../../../featurs/Settings/SettingsSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import {Container, Row} from "react-bootstrap";
import ServicesSkel from "../Skeletons/ServicesSkel.jsx";

function Index(props) {
    const {serviceForHomePage} = useSelector((state) => state.serviceReducer);

    const {isLoading, serviceSetting} = useSelector((state) => state.generalSettings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServiceSettings());
    }, [dispatch])

    useEffect(() => {
        const {limit} = serviceSetting
        dispatch(getServicesForHomePage(limit));
    }, [serviceSetting, dispatch]);

    return (
        isLoading ? <ServicesSkel/> :
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <Container>
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{serviceSetting?.sub_text}</span>
                    <h2 className="title title2" style={{float: "none"}}>
                        {serviceSetting?.title}
                    </h2>
                </div>

                <Row>
                    {serviceForHomePage?.map(item =>
                        <ServiceItem
                            info={item}
                            key={uid()}
                        />)}
                </Row>
            </Container>
        </div>
    );
}

export default Index;
