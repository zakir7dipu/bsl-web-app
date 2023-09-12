import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCourseAll, fetchAllCourseAllByPage} from "../../../featurs/Courses/CourseSlice.js";
import BlogsSkel from "../../components/Skeletons/BlogsSkel.jsx";
import Item from "./item.jsx";
import {uid} from "../../../lib/helper.js";
import Pagination from "../../../ui/Pagination.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";

function AllCourses() {
    const {
        isLoading,
        coursesAll,
        lastPage,
        currentPage,
        perPage,
        total,
        errorMess,
        metaInfo
    } = useSelector((state) => state.coursesReducer);
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "All Courses",
            url: null
        },
    ];

    const pageChangeHandler = ({selected}) => {
        let nextPage = selected + 1
        const data = {
            slug: 'all',
            serviceId: 0,
            page: nextPage
        }
        dispatch(fetchAllCourseAllByPage(data))
    }

    useEffect(() => {
        const data = {
            slug: 'all',
            serviceId: 0
        }
        dispatch(fetchAllCourseAll(data));
    }, [dispatch]);

    return (
        <>
            <HeaderMeta
                title="All Courses"
                page="All Courses"
            />
            <Breadcrumbs
                page="All Courses"
                breadcrumbs={breadcrumbs}
            />

            {isLoading ? <BlogsSkel/> :
                <div className="rs-inner-blog pt-50 pb-50 md-pt-50 md-pb-50" style={{backgroundColor: "#e9ecef"}}>
                    <div className="container">

                        <div className="row">
                            {coursesAll?.map(item =>
                                <Item info={item} key={uid()}/>
                            )}
                            <div className="col-md-12 mt-3 text-center">
                                <Pagination handlePageClick={pageChangeHandler} pageCount={lastPage} range={perPage}/>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default AllCourses;
