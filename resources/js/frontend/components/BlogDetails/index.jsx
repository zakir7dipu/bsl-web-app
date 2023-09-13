import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";
import moment from "moment/moment.js";
import {Link} from "react-router-dom";

function Index({info}) {
    const {title, id, image_link, tag, created_at, description} = info;
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="blog-details">
                    <div className="bs-img mb-35">
                        <a href="#"><img src={useInternalLink(image_link)} alt={title}/></a>
                    </div>
                    <div className="blog-full">
                        <ul className="single-post-meta">
                            <li><span className="p-date">
                                <i className="fa fa-calendar-check-o"></i> {moment(created_at).format("LL")}
                            </span>
                            </li>
                            <li>
                                <span className="p-date"> <i className="fa fa-user-o"></i> admin </span>
                            </li>
                            <li className="Post-cate">
                                <div className="tag-line">
                                    <i className="fa fa-book"></i>
                                    <Link to="#">{tag}</Link>
                                </div>
                            </li>
                        </ul>
                        <p dangerouslySetInnerHTML={{__html: description}}>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
