import React, {useEffect} from 'react';
import Item from "./item.jsx";
import {uid} from "../../../lib/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCourseAll, fetchAllCourseAllByPage} from "../../../featurs/Courses/CourseSlice.js";
import BlogsSkel from "../../components/Skeletons/BlogsSkel.jsx";
import Pagination from "../../../ui/Pagination.jsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

function Admission({type}) {
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
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const pageChangeHandler = ({selected}) => {
        let current = selected +1
        navigate(`?pages=${current}`)
    }


    useEffect(() => {
        let nextPage = searchParams.get("pages")
        if (!nextPage) {
            const data = {
                slug: type,
                serviceId: 0
            }
            dispatch(fetchAllCourseAll(data));

        } else {
            const data = {
                slug: type,
                serviceId: 0,
                page: nextPage
            }
            dispatch(fetchAllCourseAllByPage(data))
        }
    }, [dispatch, searchParams]);

    return (
        isLoading ? <BlogsSkel/> :
            <div className="rs-inner-blog pt-50 pb-50 md-pt-50 md-pb-50 mb-30">
                <div className="container">
                    <div className="sec-title2 text-center mb-45">
                        <h2 className="title" style={{float: "none"}}>Admission Ongoing</h2>
                    </div>
                    <div className="row">
                        {coursesAll?.map(item => <Item info={item} key={uid()}/>)}
                        <div className="col-md-12 mt-3 text-center">
                            <Pagination
                                handlePageClick={pageChangeHandler}
                                total={total}
                                range={perPage}
                            />
                        </div>
                        <div className="col-md-12 pt-10 pb-10 text-center">
                            <Link to="/courses/all" className="btn btn-info">View All Courses
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Admission;
