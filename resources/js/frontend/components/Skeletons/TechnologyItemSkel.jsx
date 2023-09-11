import React from 'react';
import {Link} from "react-router-dom";
import {uid, useInternalLink} from "../../../lib/helper.js";
import ImgSkel from "./ImgSkel.jsx";

function TechnologyItemSkel({count}) {
    return (
        Array(count).fill(0).map((item, index) => {
            return (
                <div className="col-lg-2 col-md-4 col-sm-4 col-6" key={uid()}>
                    <div className="technology-item">
                        <Link to="#">
                            <div className="logo-img">
                                <ImgSkel
                                    width={`100%`}
                                    height={`100px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
    );
}

export default TechnologyItemSkel;
