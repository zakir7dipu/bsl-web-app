import React from 'react';
import {Link} from "react-router-dom";
import {truncateString, ucFirst, useInternalLink} from "../../../lib/helper.js";
import moment from "moment";

function EventPost({eventInfo}) {
    return (
       <div className="col-lg-12 mb-50">
            <div className="blog-item">
                <div className="blog-img">
                    <Link to={`/event/${eventInfo?.slug}/details`}>
                        <img src={useInternalLink(eventInfo?.image_link)} alt={eventInfo?.name}/>
                    </Link>
                    <ul className="post-categories">
                        <li><Link to="#">{ucFirst(eventInfo?.type)}</Link></li>
                    </ul>
                </div>
                <div className="blog-content">
                    <h3 className="blog-title"><Link to={`/event/${eventInfo?.slug}/details`}>{eventInfo?.name}</Link>
                    </h3>
                    <div className="blog-meta">
                        <ul className="btm-cate">
                            <li>
                                <div className="blog-date">
                                    <i className="fa fa-calendar-check-o"></i> {moment(eventInfo?.form_date).format("LL")}
                                </div>
                            </li>
                            <li>
                                <div className="author">
                                    <i className="fa fa-user-o"></i> {eventInfo?.sponsors}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="blog-desc"
                         dangerouslySetInnerHTML={{__html: truncateString(eventInfo?.description, 100)}}>
                    </div>
                    <div className="blog-button inner-blog">
                        <Link className="blog-btn" to={`/event/${eventInfo?.slug}/details`}>Continue Reading</Link>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default EventPost;
