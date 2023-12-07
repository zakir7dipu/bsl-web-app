import moment from "moment";
import React from 'react';
import Style from "../../pages/Event.module.css"

function EventAbout({metaInfo}) {
    return (
        <div className="rs-about home14-about-style  pt-20 pb-20 md-pt-0 md-pb-0">
            <div className="about-bottom-section bg25 pt-20 pb-20 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className={`col-lg-6 pl-20 md-pl-15 ${Style.eventBox}`}>
                            <div className="sec-title6 mb-30">
                                <h2 className="title pb-14" style={{float:'none'}}>
                                    About The <span>Event</span>
                                </h2>
                                <div className="desc-part pt-30">
                                    <p style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html: metaInfo?.description}}></p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-6 pl-20 md-pl-15 ${Style.eventBox}`}>
                            <div className="sec-title6 mb-30">
                                <h2 className="title pb-14" style={{float:'none'}}>
                                    Where &
                                    <span> When</span>
                                </h2>
                                <div className="desc-part pt-30">
                                    <p style={{textAlign:'justify'}}>{metaInfo?.location}</p>
                                    <p>{moment(metaInfo?.form_date).format("LL")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventAbout;
