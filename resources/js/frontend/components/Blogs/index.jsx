import React, {useEffect} from 'react';
import BlogCarousel from "./BlogCarousel.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBlogs} from "../../../featurs/Blogs/BlogSlice.js";

function Index(props) {
    const {isLoading, blogs} = useSelector(state => state.blogsReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAllBlogs(5))
    },[])

    return (
        <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-30">
                    <span className="sub-text">Blogs</span>
                    <h2 className="title testi-title" style={{float:"none"}}>
                        Latest Tips &Tricks
                    </h2>
                    <div className="desc">
                        We've been building creative tools together for over a decade and have a deep appreciation for
                        software applications
                    </div>
                </div>
                <BlogCarousel
                    blogs={blogs}
                />
            </div>
        </div>
    );
}

export default Index;
