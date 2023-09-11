import React from 'react';
import {Container, Row} from "react-bootstrap";
import BlogCarousel from "../Blogs/BlogCarousel.jsx";
import TextSkel from "./TextSkel.jsx";
import {Link} from "react-router-dom";
import {useInternalLink} from "../../../lib/helper.js";
import moment from "moment";
import BlogsItemSkel from "./BlogsItemSkel.jsx";

function BlogsSkel(props) {
    return (
        <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-80 md-pb-80">
            <Container>
                <div className="sec-title2 text-center mb-30">
                    <span className="sub-text">
                        <TextSkel
                            width={`150px`}
                            lineHeight={`28px`}
                            height={`14px`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </span>
                    <h2 className="title testi-title" style={{float: "none"}}>
                        <TextSkel
                            width={`300px`}
                            lineHeight={`46px`}
                            height={`36px`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </h2>
                    <div className="desc">
                        <TextSkel
                            count={3.7}
                            width={`350px`}
                            lineHeight={`28px`}
                            height={`14px`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </div>
                </div>
                <Row>
                    <BlogsItemSkel count={3}/>
                </Row>
            </Container>
        </div>
    );
}

export default BlogsSkel;
