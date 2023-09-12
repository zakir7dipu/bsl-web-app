import React, {useEffect} from 'react';
import Item from "./item.jsx";
import {uid} from "../../../lib/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCourses} from "../../../featurs/Courses/CourseSlice.js";
import BlogsSkel from "../../components/Skeletons/BlogsSkel.jsx";

function Admission() {
    const {
        isLoading,
        courses,
        errorMess,
        metaInfo
    } = useSelector((state) => state.coursesReducer);
    const dispatch = useDispatch();
    console.log(courses)

    useEffect(() => {
        dispatch(fetchAllCourses());
    }, [dispatch]);

    return (
        isLoading ? <BlogsSkel/> :
            <div className="rs-inner-blog pt-50 pb-50 md-pt-50 md-pb-50">
                <div className="container">
                    <div className="sec-title2 text-center mb-45">
                        <h2 className="title" style={{float: "none"}}>Admission Ongoing</h2>
                    </div>
                    <div className="row">
                        {courses?.map(item =>
                            <Item info={item} key={uid()}/>
                        )}
                    </div>
                </div>
            </div>

    );
}

export default Admission;
