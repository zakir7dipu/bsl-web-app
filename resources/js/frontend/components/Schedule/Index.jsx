import React from 'react';
import {Container} from "react-bootstrap";

function Index(props) {
    return (
        <div className="rs-schedule">
            <Container>
                <div className="content-wrapper mx-auto schedule">
                    <div className="schedule-content text-center">
                        <div className="col-md-12 col-sm-12">
                            <h3 className="schedule-title">Level Up Your Business With the Finest Solutions</h3>
                            <button className="btn btn-primary schedule-text"><i className="fa fa-phone"></i> SCHEDULE A DEMO
                            </button>
                            <button className="btn schedule-text" style={{background:'#03228f', color:'white'}}><i className="fa fa-paperclip"></i> COMPANY PROFILE
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Index;
