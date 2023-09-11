import React from 'react';
import {Row} from "react-bootstrap";
import ServiceItemSkel from "./ServiceItemSkel.jsx";
import ProjectItem from "../Projects/ProjectItem.jsx";
import {uid} from "../../../lib/helper.js";
import ProjectItemSkel from "./ProjectItemSkel.jsx";
import TextSkel from "./TextSkel.jsx";

function ProjectsSkel(props) {
    return (
        <div className="rs-project style4 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container-fluid">
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
                <Row>
                    <ProjectItemSkel count={3}/>
                </Row>
            </div>
        </div>
    );
}

export default ProjectsSkel;
