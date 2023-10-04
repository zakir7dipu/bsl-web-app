import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseBySlug} from "../../../featurs/Courses/CourseSlice";
import Preloader from "../../components/Preloader/index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";
import MainCourse from "./mainCourse.jsx";
import CourseInformation from "./courseInformation.jsx";

function Index(props) {
    const {slug} = useParams();
    const {
        isLoading,
        metaInfo
    } = useSelector(state => state.coursesReducer);
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Course",
            url: "/service/training/details"
        },
        {
            name: `${metaInfo?.name}`,
            url: null
        },
    ]

    useEffect(() => {
        dispatch(fetchCourseBySlug(slug));
        window.scrollTo(0, 0);
    }, [slug])

    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Course Details"
                page="Course Details"
            />
            <Breadcrumbs
                page="Course Details"
                breadcrumbs={breadcrumbs}
            />

            <div className="rs-case-studies-single pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 md-mb-50">
                            <MainCourse course={metaInfo}/>
                        </div>
                        <div className="col-lg-4 pl-32 md-pl-15">
                            <CourseInformation course={metaInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
