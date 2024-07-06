import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";
import {fetchAllBlogsByPage, fetchAllBlogsData} from "../../../featurs/Blogs/BlogSlice.js";
import {Container, Row} from "react-bootstrap";
import ServiceItemSkel from "../../components/Skeletons/ServiceItemSkel.jsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {uid, useInternalLink} from "../../../lib/helper.js";
import moment from "moment";
import Pagination from "../../../ui/Pagination.jsx";

function Index(props) {

    const {
        isLoading,
        paginateBlogs,
        lastPage,
        currentPage,
        perPage,
        total,
        apiUrl
    } = useSelector(state => state.blogsReducer);
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "ERP News",
            url: "/blog"
        },
    ]
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // const pageChangeHandler = (selected) => {
    //     let page = selected+1
    //     dispatch(fetchAllBlogsByPage({page: page}))
    // }
    const pageChangeHandler = ({selected}) => {
        let current = selected + 1
        navigate(`?pages=${current}`)
    }

    useEffect(() => {
        let nextPage = searchParams.get("pages")
        if (!nextPage) {
            dispatch(fetchAllBlogsData())
        } else {
            dispatch(fetchAllBlogsByPage({page: nextPage}))
        }
        window.scrollTo(0, 0);
    }, [dispatch, searchParams])


    return (
        <>
            <HeaderMeta
                title="ERP News"
                page="ERP News"
            />
            <Breadcrumbs
                page="ERP News"
                breadcrumbs={breadcrumbs}
            />

            <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                <Container>
                    <Row>
                        {isLoading &&
                            <ServiceItemSkel count={6}/>
                        }
                        {
                           !isLoading && paginateBlogs?.map(item =>
                                <div className="col-lg-4 mb-50" key={uid()}>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <Link to={`/blog/${item?.slug}/details`}>
                                                <img src={useInternalLink(item?.image_link)}
                                                     alt=""/>
                                            </Link>
                                            <ul className="post-categories">
                                                <li><Link to="#">{item?.tag}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title"><Link
                                                to={`/blog/${item?.slug}/details`}>{item?.title}</Link></h3>
                                            <div className="blog-meta">
                                                <ul className="btm-cate">
                                                    <li>
                                                        <div className="blog-date">
                                                            <i className="fa fa-calendar-check-o"></i> {moment(item?.created_at).format("LL")}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="author">
                                                            <i className="fa fa-user-o"></i> admin
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="blog-desc">
                                                {item?.meta_description.slice(0, 150)}.....
                                            </div>
                                            <div className="blog-button inner-blog">
                                                <Link className="blog-btn" to={`/blog/${item?.slug}/details`}>Continue
                                                    Reading</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className="col-md-12 mt-3 text-center">
                            <Pagination
                                handlePageClick={pageChangeHandler}
                                total={total}
                                range={perPage}
                            />
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Index;
