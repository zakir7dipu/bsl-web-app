import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";

function EventSpekar({eventHosts}) {
    console.log(eventHosts)
    return (
        <section id="speakers" className="wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <div className="container">
                <div className="section-header sec-title6">
                    <h2 className="title" style={{float: 'none'}}>Trainers and Speakers</h2>
                    <p>Here are some of our trainers and speakers</p>
                </div>

                <div className="row">
                    {
                        eventHosts && eventHosts?.map(host =>
                            <div className="col-lg-4 col-md-6" key={uid()}>
                                <div className="speaker">
                                    <img
                                        src={useInternalLink(host?.thumbnail)}
                                        alt={host?.name} className="img-fluid"/>
                                    <div className="details">
                                        <h3><Link to={host?.linkedin}>{host?.name}</Link>
                                        </h3>
                                        <p>{host?.designation}, {host?.qualification}</p>
                                        <div className="social">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </section>
    );
}

export default EventSpekar;
