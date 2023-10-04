import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";
import courseIcon from "../../../../frontend-assets/images/course/courseIcon.png";

function Category({services}) {
    return (
        <div className="rs-industry pt-50 pb-50 md-pt-50 md-pb-50" style={{backgroundColor: "#e9ecef"}}>
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <h2 className="title" style={{float: "none"}}>Training Category</h2>
                </div>
                <div className="all-services justify-content-center" style={{width: "100%"}}>
                    {services?.map(item =>
                        <div className="services-item" key={uid()}>
                            <Link to={`/training/${item?.slug}/courses`}>
                                <div className="services-wrap" style={{height: "200px"}}>
                                    <div className="services-icon">
                                        <img src={useInternalLink(item?.icons)} alt=""/>
                                    </div>
                                    <div className="services-text">
                                        <h4 className="title" style={{float: "none"}}>{item?.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                    <div className="services-item" key={uid()}>
                        <Link to={`/courses/all`}>
                            <div className="services-wrap" style={{height: "200px"}}>
                                <div className="services-icon">
                                    <img src={courseIcon} alt=""/>
                                </div>
                                <div className="services-text">
                                    <h4 className="title" style={{float: "none"}}>All Course</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
