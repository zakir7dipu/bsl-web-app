import React from 'react';
import "./style.css";
import {useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";

function Item({info}) {
    const {slug, thumbnail, name, class_count, duration, price, discount, course_type} = info;
    return (
        <>
            {
                course_type === 'admission' && <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="single-studies grid-item">
                        <div className="inner-course">
                            <div className="case-img"><img
                                src={useInternalLink(thumbnail)}
                                alt={name}/></div>
                            <div className="case-content">
                                <h4 className="case-title"><Link
                                    to={`/course/${slug}`}>{name}</Link>
                                </h4>
                                <ul className="meta-course p-0">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                             className="feather feather-book">
                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                            <path
                                                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                        </svg>
                                        {class_count}
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                             className="feather feather-clock">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        {duration}
                                    </li>

                                    <li className="price">
                                        ৳{discount > 0 ? <><span>{price - discount} </span>
                                        <del>৳{price}</del>
                                    </> : price}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default Item;
