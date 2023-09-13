import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {findLatestBlogs} from "../../../featurs/Blogs/BlogSlice.js";

function LatestBlog({infoID}) {
    const {
        latestBlogs
    } = useSelector(state => state.blogsReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findLatestBlogs(infoID))
    }, [infoID])

    return (
        <>Latest BLog</>
    );
}

export default LatestBlog;
