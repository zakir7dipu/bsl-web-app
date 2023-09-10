import React from 'react';
import Carousel from "react-multi-carousel";
import {uid} from "../../../lib/helper.js";
import TestimonialItem from "./TestimonialItem.jsx";

function TestimonialCarousel(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
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
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
        >
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
        </Carousel>
    );
}

export default TestimonialCarousel;
