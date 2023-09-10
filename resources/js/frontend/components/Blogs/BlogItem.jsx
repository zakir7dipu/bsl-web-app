import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/bn.js"
import {useInternalLink} from "../../../lib/helper.js";

function BlogItem({blogItem}) {
    console.log(blogItem)
    const {image_link, title, meta_description, created_at} = blogItem
    return (
        <div className="blog-item">
            <div className="image-wrap">
                <Link to="blog-details.html"><img style={{width:"353px", height:"353px"}} src={useInternalLink(image_link)} alt=""/></Link>
                <ul className="post-categories">
                    <li><Link to="#">Software Development</Link></li>
                </ul>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {moment(created_at).format("LL")}</li>
                    <li className="admin"><i className="fa fa-user-o"></i> admin</li>
                </ul>
                <h3 className="blog-title"><Link to="#">{title}</Link></h3>
                <p className="desc">{meta_description.slice(0, 150)}.....</p>
                <div className="blog-button"><Link to="#">Learn More</Link></div>
            </div>
        </div>
    );
}

export default BlogItem;
