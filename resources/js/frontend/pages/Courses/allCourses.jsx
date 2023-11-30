import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCourseAll, fetchAllCourseAllByPage} from "../../../featurs/Courses/CourseSlice.js";
import BlogsSkel from "../../components/Skeletons/BlogsSkel.jsx";
import Item from "./item.jsx";
import {uid} from "../../../lib/helper.js";
import Pagination from "../../../ui/Pagination.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

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
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

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

    const pageChangeHandler = (selected) => {
        let nextPage = parseInt(selected) +1
        console.log(selected)
        navigate(`?pages=${nextPage}`)
    }

    useEffect(() => {
        let nextPage = searchParams.get("pages")
        if(!nextPage) {
            let data = {
                slug: 'all',
                serviceId: 0
            }
            dispatch(fetchAllCourseAll(data));
        } else {
            let data = {
                slug: 'all',
                serviceId: 0,
                page: nextPage
            }
            dispatch(fetchAllCourseAllByPage(data))
        }
    }, [dispatch, searchParams]);

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
                <div className="rs-inner-blog pt-50 pb-50 md-pt-50 md-pb-50 mb-40" style={{backgroundColor: "#e9ecef"}}>
                    <div className="container">

                        <div className="row">
                            {coursesAll?.map(item =>
                                <Item info={item} key={uid()}/>
                            )}
                            <div className="col-md-12 mt-3 text-center">
                                <Pagination handlePageClick={pageChangeHandler} total={total} range={perPage} curentPage={currentPage}/>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default AllCourses;
