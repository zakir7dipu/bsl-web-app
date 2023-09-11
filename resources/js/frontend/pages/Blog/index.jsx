import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";
import {fetchAllBlogs} from "../../../featurs/Blogs/BlogSlice.js";
import {Container, Row} from "react-bootstrap";
import ServiceItemSkel from "../../components/Skeletons/ServiceItemSkel.jsx";
import {Link} from "react-router-dom";
import {uid, useInternalLink} from "../../../lib/helper.js";
import moment from "moment";

function Index(props) {

    const {isLoading, blogs} = useSelector(state => state.blogsReducer)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "All Blog",
            url: "/blog"
        },
    ]
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBlogs(0))
    }, [dispatch])


    return (
        <>
            <HeaderMeta
                title="Blog"
                page="Blog"
            />
            <Breadcrumbs
                page="All Blog"
                breadcrumbs={breadcrumbs}
            />

            {isLoading && <Row>
                <ServiceItemSkel count={6}/>
            </Row>}
            <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                <Container>
                    <Row>
                        {isLoading &&
                            <ServiceItemSkel count={6}/>
                        }
                        {
                            blogs?.map(item =>
                                <div className="col-lg-4 mb-50" key={uid()}>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <Link to={`/blog/${item?.slug}/details`}>
                                                <img src={useInternalLink(item?.image_link)}
                                                     alt=""/>
                                            </Link>
                                            <ul className="post-categories">
                                                <li><Link to={`/blog/${item?.slug}/details`}>Application Testing</Link>
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
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Index;
