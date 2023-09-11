import React from 'react';
import {Link} from "react-router-dom";
import {useInternalLink} from "../../../lib/helper.js";
import moment from "moment/moment.js";
import ImgSkel from "./ImgSkel.jsx";
import TextSkel from "./TextSkel.jsx";

function BlogsItemSkel({count}) {
    return (
        Array(count).fill(0).map((item, index) => {
            return (
                <div className="blog-item">
                    <div className="image-wrap">
                        <Link to="#">
                            <ImgSkel
                                width={`353px`}
                                height={`353px`}
                                baseColor={`#cacaca`}
                                highlightColor={`#949393`}
                            />
                        </Link>
                        <ul className="post-categories">
                            <li>
                                <TextSkel
                                    width={`80px`}
                                    lineHeight={`20px`}
                                    height={`11px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="blog-content">
                        <ul className="blog-meta">
                            <li className="date">
                                <TextSkel
                                    width={`60px`}
                                    lineHeight={`20px`}
                                    height={`11px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </li>
                        </ul>
                        <h3 className="blog-title">
                            <TextSkel
                                width={`300px`}
                                lineHeight={`46px`}
                                height={`36px`}
                                baseColor={`#cacaca`}
                                highlightColor={`#949393`}
                            />
                        </h3>
                        <p className="desc">
                            <TextSkel
                                count={2.7}
                                width={`150px`}
                                lineHeight={`28px`}
                                height={`14px`}
                                baseColor={`#cacaca`}
                                highlightColor={`#949393`}
                            />
                        </p>
                    </div>
                </div>
            );
        })
    )
}

export default BlogsItemSkel;
