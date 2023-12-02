import React, {useEffect} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showServiceData} from "../../../featurs/Service/ServiceSlice";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";
import {fetchAllCourseAll, fetchAllCourseAllByPage} from "../../../featurs/Courses/CourseSlice.js";
import BlogsSkel from "../../components/Skeletons/BlogsSkel.jsx";
import Item from "../Courses/item.jsx";
import {uid} from "../../../lib/helper.js";
import Pagination from "../../../ui/Pagination.jsx";

function Index(props) {
    const {slug} = useParams();
    const {
        isLoading,
        metaInfo,
    } = useSelector((state) => state.serviceReducer);

    const {
        coursesAll,
        lastPage,
        currentPage,
        perPage,
        total,
        errorMess,
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
            name: `${metaInfo?.service?.title}`,
            url: `/service/${metaInfo?.service?.slug}/details`
        },
        {
            name: `${metaInfo?.title}`,
            url: null
        },
    ];

    const pageChangeHandler = ({selected}) => {
        let current = selected + 1
        navigate(`?pages=${current}`)
    }

    useEffect(() => {
        let nextPage = searchParams.get("pages")
        if (!nextPage) {
            const data = {
                slug: 'category',
                serviceId: `${metaInfo?.id}`
            }
            dispatch(fetchAllCourseAll(data));
        } else {
            const data = {
                slug: 'category',
                serviceId: `${metaInfo?.id}`,
                page: nextPage
            }
            dispatch(fetchAllCourseAllByPage(data))
        }
    }, [metaInfo, searchParams]);

    useEffect(() => {
        dispatch(showServiceData(slug));
        window.scrollTo(0, 0);
    }, [slug])

    return (
        <>
            <HeaderMeta
                title={metaInfo?.title}
                page="Category wise courses"
            />
            <Breadcrumbs
                page={metaInfo?.title}
                breadcrumbs={breadcrumbs}
            />
            <div className="rs-inner-blog pt-50 pb-50 md-pt-50 md-pb-50" style={{backgroundColor: "#e9ecef"}}>
                <div className="container">
                    {isLoading ? <BlogsSkel/> :
                        <div className="row">
                            {coursesAll?.map(item =>
                                <Item info={item} key={uid()}/>
                            )}
                        </div>
                    }
                    <div className="col-md-12 mt-3 text-center">
                        <Pagination
                            handlePageClick={pageChangeHandler}
                            total={total}
                            range={perPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
