import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlogsDataBySlug} from "../../../featurs/Blogs/BlogSlice.js";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";
import Preloader from "../../components/Preloader";
import MainDetails from "../../components/BlogDetails";
import LatestBlog from "../../components/BlogDetails/latestBlog.jsx";

function BlogDetails(props) {
    const {slug} = useParams();

    const {
        isLoading,
        metaInfo
    } = useSelector(state => state.blogsReducer);

    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "ERP News",
            url: "/blog"
        },
        {
            name: `${metaInfo?.title}`,
            url: null
        },
    ]

    useEffect(() => {
        dispatch(fetchBlogsDataBySlug(slug));
        window.scrollTo(0, 0);
    }, [slug])

    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="ERP News "
                page="ERP News "
            />
            <Breadcrumbs
                page="ERP News "
                breadcrumbs={breadcrumbs}
            />
            <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 order-last">
                            <LatestBlog infoID={metaInfo?.id} />
                        </div>
                        <div className="col-lg-8 pr-35 md-pr-15">
                            <MainDetails info={metaInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default BlogDetails;
