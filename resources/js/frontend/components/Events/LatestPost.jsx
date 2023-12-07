import {useInternalLink} from "@/lib/helper.js";
import moment from "moment";
import React from 'react';
import {Link} from "react-router-dom";

function LatestPost({workshop}) {
    return (
        <div className="recent-post-widget">
            <div className="post-img">
                <Link to={`/event/${workshop?.slug}/details`}>
                    <img src={useInternalLink(workshop?.image_link)} alt={workshop?.name}/>
                </Link>
            </div>
            <div className="post-desc">
                <Link to={`/event/${workshop?.slug}/details`}>{workshop?.name}</Link>
                <span className="date"><i className="fa fa-calendar"></i>{moment(workshop?.form_date).format("LL")}</span>
            </div>
        </div>
    );
}

export default LatestPost;
