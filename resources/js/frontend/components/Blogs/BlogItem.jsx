import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/bn.js"
import {useInternalLink} from "../../../lib/helper.js";

function BlogItem({blogItem}) {
    const {image_link,slug,tag, title, meta_description, created_at} = blogItem
    return (
        <div className="blog-item">
            <div className="image-wrap">
                <Link to={`/blog/${slug}/details`}><img style={{width:"353px", height:"353px"}} src={useInternalLink(image_link)} alt=""/></Link>
                <ul className="post-categories">
                    <li><Link to="#">{tag}</Link></li>
                </ul>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {moment(created_at).format("LL")}</li>
                </ul>
                <h3 className="blog-title"><Link to={`/blog/${slug}/details`}>{title}</Link></h3>
                <p className="desc">{meta_description.slice(0, 150)}.....</p>
                <div className="blog-button"><Link to={`/blog/${slug}/details`}>Learn More</Link></div>
            </div>
        </div>
    );
}

export default BlogItem;
