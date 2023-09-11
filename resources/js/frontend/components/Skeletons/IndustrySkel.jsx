import React from 'react';
import Items from "../Industry/Items.jsx";
import {uid, useInternalLink} from "../../../lib/helper.js";
import TextSkel from "./TextSkel.jsx";
import ImgSkel from "./ImgSkel.jsx";
import IndustryItemSkel from "./IndustryItemSkel.jsx";
import {Row} from "react-bootstrap";

function IndustrySkel(props) {
    return (
        <div className="rs-industry pt-120 pb-120 md-pt-80 md-pb-80">
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
                    <h2 className="title" style={{float: "none"}}>
                        <TextSkel
                            width={`300px`}
                            lineHeight={`46px`}
                            height={`36px`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </h2>
                </div>

                <div className="all-services" style={{width: "100%"}}>
                    <IndustryItemSkel count={5}/>
                </div>
            </div>
        </div>
    );
}

export default IndustrySkel;
