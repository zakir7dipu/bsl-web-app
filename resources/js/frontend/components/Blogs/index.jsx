import React, {useEffect} from 'react';
import BlogCarousel from "./BlogCarousel.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBlogs} from "../../../featurs/Blogs/BlogSlice.js";
import {fetchBlogSettings, fetchCaseStudySettings} from "../../../featurs/Settings/SettingsSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import {Row} from "react-bootstrap";

function Index(props) {
    const {isLoading, blogs} = useSelector(state => state.blogsReducer)
    const dispatch = useDispatch();

    const {blogSetting} = useSelector((state) => state.generalSettings);
    useEffect(() => {
        dispatch(fetchBlogSettings());
    }, [dispatch])

    useEffect(() => {
        const {limit} = blogSetting;
        dispatch(fetchAllBlogs(limit))
    }, [blogSetting, dispatch])

    return (
        <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-30">
                    <span className="sub-text">{blogSetting?.sub_text}</span>
                    <h2 className="title testi-title" style={{float: "none"}}>
                        {blogSetting?.title}
                    </h2>
                    <div className="desc">
                        {blogSetting?.desc}
                    </div>
                </div>
                {isLoading && <Row>
                    <ServiceItemSkel count={3}/>
                </Row>}
                {!isLoading && <BlogCarousel
                    blogs={blogs}
                />}

            </div>
        </div>
    );
}

export default Index;
