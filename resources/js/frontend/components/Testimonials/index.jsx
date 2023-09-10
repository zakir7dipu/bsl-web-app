import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TestimonialImg from "../../../../frontend-assets/images/testimonial/testimonial-3.png"

function Index(props) {
    return (
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="testi-img">
                            <img src={TestimonialImg} alt=""/>
                        </div>
                    </Col>

                    <Col lg={6} className="md-pt-50 modify-gap">
                        <div className="sec-title mb-50">
                            <div className="sub-text style4-bg left testi">Testimonials</div>
                            <h2 className="title pb-20" style={{float:"none"}}>
                                What Customer Saying
                            </h2>
                            <div className="desc">
                                Over 25 years working in IT services developing software applications and mobile apps
                                for
                                clients all over the world.
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Index;
