import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ImgSkel from "./ImgSkel.jsx";
import TestimonialImg from "../../../../frontend-assets/images/testimonial/testimonial-3.png";
import TestimonialCarousel from "../Testimonials/TestimonialCarousel.jsx";
import TextSkel from "./TextSkel.jsx";

function TestimonialSkel(props) {
    return (
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="testi-img">
                            <ImgSkel
                                width={`685px`}
                                height={`465px`}
                                baseColor={`#cacaca`}
                                highlightColor={`#949393`}
                            />
                        </div>
                    </Col>

                    <Col lg={6} className="md-pt-50 modify-gap">
                        <div className="sec-title mb-2">
                            <div className="sub-text style4-bg left testi">
                                <TextSkel
                                    lineHeight={`28px`}
                                    height={`14px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </div>
                            <h2 className="title pb-20" style={{float: "none"}}>
                                <TextSkel
                                    lineHeight={`46px`}
                                    height={`36px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </h2>
                            <div className="desc">
                                <TextSkel
                                    count={2.5}
                                    lineHeight={`46px`}
                                    height={`36px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </div>
                        </div>

                        <div className="mt-3">
                            <ImgSkel
                                width={`100%`}
                                height={`200px`}
                                baseColor={`#cacaca`}
                                highlightColor={`#949393`}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TestimonialSkel;
