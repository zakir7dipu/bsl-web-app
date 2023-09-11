import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchParentServices} from "../../../featurs/Service/ServiceSlice.js";
import {uid} from "../../../lib/helper.js";
import ServiceItem from "./ServiceItem.jsx";
import {fetchServiceSettings} from "../../../featurs/Settings/SettingsSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import {Container, Row} from "react-bootstrap";

function Index(props) {
    const {
        isLoading,
        parentServices
    } = useSelector((state) => state.serviceReducer);

    const {serviceSetting} = useSelector((state) => state.generalSettings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServiceSettings());
    }, [dispatch])

    useEffect(() => {
        const {limit} = serviceSetting
        dispatch(fetchParentServices(limit));
    }, [serviceSetting, dispatch]);

    return (
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <Container>
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{serviceSetting?.sub_text}</span>
                    <h2 className="title title2" style={{float: "none"}}>
                        {serviceSetting?.title}
                    </h2>
                </div>

                <Row>
                    {isLoading && <ServiceItemSkel count={6}/>}
                    {!isLoading && parentServices && parentServices.map(item =>
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
