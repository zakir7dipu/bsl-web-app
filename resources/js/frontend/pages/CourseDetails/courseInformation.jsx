import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {goToExternalLink, useInternalLink} from "../../../lib/helper.js";
import "./style.css";
import {useSelector} from "react-redux";

function CourseInformation({course}) {
    const {generalSetting} = useSelector(state => state.generalSettings);
    const location = useLocation();
    const courseLink = useInternalLink(`${location.pathname}`);

    return (
        <>
            <div className="react-sidebar react-back-course2">
                <div className="widget get-back-course">
                    <ul className="price">
                        {course?.discount > 0 ? <>
                            <li>৳ {course?.price - course?.discount}</li>
                            <li>৳ {course?.price}</li>
                        </> : <li>৳ {course?.price}</li>}
                    </ul>
                    <ul className="price__course">
                        <li><i className="fa fa-clock-o"></i> Course Duration: <b>{course?.duration}</b></li>
                        <li><i className="fa fa-clock-o"></i> Per Week : <b>{course?.class_per_week}</b></li>
                        <li><i className="fa fa-clock-o"></i> Class Duration: <b>{course?.class_duration}</b></li>
                        <li><i className="fa fa-book"></i> Lectures: <b>{course?.class_count} lectures</b></li>
                        <li><i className="fa fa-map"></i> Language: <b> {course?.language}</b></li>
                        <li><i className="fa fa-map"></i> Delivery Mode: <b> {course?.delivery_mode}</b></li>
                    </ul>
                    <Link to="#" className="start-btn"
                          onClick={() => goToExternalLink(`https://api.whatsapp.com/send/?phone=${generalSetting?.contact?.whatsapp_number}&text=I have to know about this course. %0A Course Link: ${courseLink}`)}>
                        Start Now <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default CourseInformation;
