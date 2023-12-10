import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";

function EventOrganizers({eventOrganizer}) {
    return (
        <>
            <section id="strategics" className="wow fadeInUp"
                     style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <div className="container">
                    <div className="section-header sec-title6">
                        <h2 className="title" style={{float:'none'}}>Organizer</h2>
                    </div>

                    <div className="row no-gutters supporters-wrap clearfix">
                        {
                            eventOrganizer?.map(organizer =>
                                <div className="col-md-4 col-6" key={uid()}>
                                    <div className="supporter-logo">
                                        <img src={useInternalLink(organizer?.thumbnail)}
                                             className="img-fluid" alt={organizer?.title}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

            </section>
        </>
    );
}

export default EventOrganizers;
