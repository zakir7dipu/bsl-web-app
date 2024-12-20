import React from 'react';
import TextSkel from "./TextSkel.jsx";
import Skeleton from "react-loading-skeleton";
import {uid} from "../../../lib/helper.js";

function ServiceItemSkel({count}) {
    return (
        Array(count).fill(0).map((item, index) => {
            return (
                <div className="col-lg-4 col-md-6 mb-30" key={uid()}>
                    <Skeleton
                        width={`100%`}
                        height={`250px`}
                        baseColor={`#cacaca`}
                        highlightColor={`#949393`}
                    />
                </div>
            )
        })
    );
}

export default ServiceItemSkel;
