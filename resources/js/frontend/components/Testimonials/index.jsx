import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TestimonialImg from "../../../../frontend-assets/images/testimonial/testimonial-3.png"
import TestimonialCarousel from "./TestimonialCarousel.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlogSettings, fetchTestimonialSettings} from "../../../featurs/Settings/SettingsSlice.js";
import ImgSkel from "../Skeletons/ImgSkel.jsx";
import TestimonialSkel from "../Skeletons/TestimonialSkel.jsx";

function Index(props) {
    const {isLoading, testimonialSetting} = useSelector((state) => state.generalSettings);
    const dispatch = useDispatch();
    const {sub_text, title, desc, limit} = testimonialSetting
    useEffect(() => {
        dispatch(fetchTestimonialSettings());
    }, [dispatch])

    return (
        isLoading ? <TestimonialSkel/> :
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="testi-img">
                            <img src={TestimonialImg} alt=""/>
                        </div>
                    </Col>

                    <Col lg={6} className="md-pt-50 modify-gap">
                        <div className="sec-title mb-2">
                            <div className="sub-text style4-bg left testi">{sub_text}</div>
                            <h2 className="title pb-20" style={{float: "none"}}>
                                {title}
                            </h2>
                            <div className="desc">
                                {desc}
                            </div>
                        </div>

                        <TestimonialCarousel testimonialLimit={limit}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Index;
