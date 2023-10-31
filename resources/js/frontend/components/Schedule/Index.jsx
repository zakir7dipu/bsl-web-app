import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Index(props) {
    return (
        <div className="rs-schedule">
            <Container>
                <div className="content-wrapper mx-auto schedule">
                    <div className="schedule-content text-center">
                        <div className="col-md-12 col-sm-12">
                            <h3 className="schedule-title">Level Up Your Business With the Finest Solutions</h3>
                        </div>
                        <div className="col-md-12">
                            <div className="double-btn">
                                <Link className="btn double-btn-one schedule-text col-md-6" to={`#`}><i
                                    className="fa fa-phone"></i> SCHEDULE A DEMO
                                </Link>
                                <span className="schedule-middle-btn col-md-2">OR</span>
                                <Link className="btn double-btn-two col-md-6" to={`#`}><i
                                    className="fa fa-paperclip"></i> COMPANY PROFILE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Index;
