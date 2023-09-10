import React, {useEffect} from 'react';
import Carousel from "react-multi-carousel";
import BlogItem from "./BlogItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBlogs} from "../../../featurs/Blogs/BlogSlice.js";
import {uid} from "../../../lib/helper.js";

function BlogCarousel({blogs}) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
        >
            {blogs?.map(item=><BlogItem
                key={uid()}
                blogItem={item}
            />)}
        </Carousel>
    );
}

export default BlogCarousel;
