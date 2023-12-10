import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import {toStringTime, uid, useInternalLink} from "../../../lib/helper.js";
import moment from "moment";

function EventSchedule({eventSchedule, metaInfo}) {
    console.log(eventSchedule)
    return (
        <section id="schedule" className="section-with-bg pb-20">
            <div className="container wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <div className="section-header sec-title6">
                    <h2 className="title" style={{float:'none'}}>Event Schedule</h2>
                    <p>Here is our event schedule</p>
                </div>
                <h3 className="sub-heading">Join us
                    on {moment(metaInfo?.form_date).format("LL")} at {metaInfo?.subtext}</h3>
                <Tabs
                    defaultActiveKey="0"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    {
                        eventSchedule?.map((day, index) =>
                            <Tab eventKey={index} key={uid()} title={day?.title}>
                                {
                                    day?.workshop_sessions.map(session =>
                                        <div className="row schedule-item" key={uid()}>
                                            <div className="col-md-2 offset-md-3">
                                                <time>{toStringTime(session?.from)}
                                                    -{toStringTime(session?.to)}
                                                </time>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="speaker">
                                                    <img
                                                        src={useInternalLink(session?.session_hosts?.host?.thumbnail)}
                                                        alt={session?.title}/>
                                                </div>
                                                <h4>{session?.title}</h4>
                                                <p dangerouslySetInnerHTML={{__html: session?.topics}}></p>
                                            </div>
                                        </div>
                                    )
                                }
                            </Tab>
                        )
                    }
                </Tabs>
            </div>
        </section>
    );
}

export default EventSchedule;
