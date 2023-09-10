import React from 'react';
import quote2 from "../../../../frontend-assets/images/testimonial/main-home/quote2.png"
import testimonialAvatar from "../../../../frontend-assets/images/testimonial/main-home/1.jpg"

function TestimonialItem(props) {
    return (
        <div className="testi-item">
            <div className="author-desc">
                <div className="desc">
                    <img className="quote" src={quote2} alt=""/>
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.
                </div>
            </div>
            <div className="testimonial-content">
                <div className="author-img">
                    <img src={testimonialAvatar} alt=""/>
                </div>
                <div className="author-part">
                    <a className="name" href="#">Mariya Khan</a>
                    <span className="designation">CEO, Brick Consulting</span>
                </div>
            </div>
        </div>
);
}

export default TestimonialItem;
