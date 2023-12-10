import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";

function EventPartners({eventPartner}) {
    return (
        <section id="supporters" className="section-with-bg wow fadeInUp"
                 style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <div className="container">
                <div className="section-header sec-title6">
                    <h2 className="title" style={{float:'none'}}>Strategic Partner</h2>
                </div>

                <div className="row no-gutters supporters-wrap clearfix">
                    {
                        eventPartner?.map(partner =>
                            <div className="col-lg-3 col-md-4 col-6" key={uid()}>
                                <div className="supporter-logo">
                                    <img src={useInternalLink(partner?.thumbnail)} className="img-fluid"
                                         alt={partner?.title}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default EventPartners;
