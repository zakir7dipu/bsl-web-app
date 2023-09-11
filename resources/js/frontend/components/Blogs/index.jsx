import React, {useEffect} from 'react';
import BlogCarousel from "./BlogCarousel.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBlogs} from "../../../featurs/Blogs/BlogSlice.js";
import {fetchBlogSettings} from "../../../featurs/Settings/SettingsSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import {Container, Row} from "react-bootstrap";
import BlogsSkel from "../Skeletons/BlogsSkel.jsx";

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
        isLoading ? <BlogsSkel/> :
        <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-80 md-pb-80">
            <Container>
                <div className="sec-title2 text-center mb-30">
                    <span className="sub-text">{blogSetting?.sub_text}</span>
                    <h2 className="title testi-title" style={{float: "none"}}>
                        {blogSetting?.title}
                    </h2>
                    <div className="desc">
                        {blogSetting?.desc}
                    </div>
                </div>
                <BlogCarousel
                    blogs={blogs}
                />
            </Container>
        </div>
    );
}

export default Index;
