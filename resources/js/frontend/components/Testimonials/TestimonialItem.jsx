import React from 'react';
import quote2 from "../../../../frontend-assets/images/testimonial/main-home/quote2.png"
import testimonialAvatar from "../../../../frontend-assets/images/testimonial/main-home/1.jpg"
import {useInternalLink} from "../../../lib/helper.js";

function TestimonialItem({testimonial}) {
    const {name, image_link, designation, description} = testimonial
    return (
        <div className="testi-item">
            <div className="author-desc">
                <div className="desc">
                    <img className="quote" src={quote2} alt=""/>
                    {description.replace(/<\/?[^>]+(>|$)/g, "")}
                </div>
            </div>
            <div className="testimonial-content">
                <div className="author-img">
                    <img src={useInternalLink(image_link)} alt=""/>
                </div>
                <div className="author-part">
                    <a className="name" href="#">{name}</a>
                    <span className="designation">{designation}</span>
                </div>
            </div>
        </div>
);
}

export default TestimonialItem;
