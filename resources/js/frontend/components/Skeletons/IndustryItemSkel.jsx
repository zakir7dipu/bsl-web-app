import React from 'react';
import ImgSkel from "./ImgSkel.jsx";
import TextSkel from "./TextSkel.jsx";
import {uid} from "../../../lib/helper.js";

function IndustryItemSkel({count}) {

    return (
        Array(count).fill(0).map((item, index) => {
            return(
                <div className="services-item" key={uid()}>
                    <div className="services-wrap">
                        <div className="services-icon">
                            <ImgSkel
                                width={`100%`}
                                height={`150px`}
                                baseColor={`#cacaca`}
                                highlightColor={`#949393`}
                            />
                        </div>
                        <div className="services-text">
                            <h4 className="title" style={{float: "none"}}>
                                <TextSkel
                                    lineHeight={`28px`}
                                    height={`20px`}
                                    baseColor={`#cacaca`}
                                    highlightColor={`#949393`}
                                />
                            </h4>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default IndustryItemSkel;
