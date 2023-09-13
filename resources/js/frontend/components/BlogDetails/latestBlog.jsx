import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {fetchLatestBlogs} from "../../../featurs/Blogs/BlogSlice.js";
import {useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/bn.js"

function LatestBlog({infoID}) {
    const {
        isLoading,
        latest
    } = useSelector(state => state.blogsReducer);

    const dispatch = useDispatch();
    console.log(latest)

    useEffect(() => {
        dispatch(fetchLatestBlogs(infoID))
    }, [infoID])

    return (
        isLoading ? "" :
            <div className="widget-area">
                <div className="recent-posts mb-50">
                    <div className="widget-title">
                        <h3 className="title" style={{float: "none"}}>Latest Posts</h3>
                    </div>
                    {latest?.map(item=>{
                        const {slug, title, image_link, created_at} = item
                        return(
                            <div className="recent-post-widget">
                                <div className="post-img">
                                    <Link to={`/blog/${slug}/details`}><img src={useInternalLink(image_link)} alt=""/></Link>
                                </div>
                                <div className="post-desc">
                                    <Link to={`/blog/${slug}/details`}>{title}</Link>
                                    <span className="date">
                                                <i className="fa fa-calendar"></i>
                                        {moment(created_at).format("LL")}
                                            </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    );
}

export default LatestBlog;
