import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {fetchLatestBlogs} from "../../../featurs/Blogs/BlogSlice.js";

function LatestBlog({infoID}) {
    const {
        isLoading,
        latest
    } = useSelector(state => state.blogsReducer);

    const dispatch = useDispatch();

    console.log(latest)

    useEffect(() => {
        //dispatch(fetchLatestBlogs(info))
    },[])

    return (
        <>Latest BLog</>
    );
}

export default LatestBlog;
