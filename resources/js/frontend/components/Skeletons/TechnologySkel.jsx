import React from 'react';
import Item from "../Technology/Item.jsx";
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";
import TechnologyItemSkel from "./TechnologyItemSkel.jsx";
import TextSkel from "./TextSkel.jsx";

function TechnologySkel(props) {
    return (
        <div className="rs-technology gray-color pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">
                        <TextSkel
                            width={`150px`}
                            lineHeight={`28px`}
                            height={`14px`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </span>
                    <h2 className="title title2" style={{float: "none"}}>
                        <TextSkel
                            width={`300px`}
                            lineHeight={`46px`}
                            height={`36px`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </h2>
                </div>
                <div className="row">
                    <TechnologyItemSkel count={12}/>
                </div>
            </div>
        </div>
    );
}

export default TechnologySkel;
