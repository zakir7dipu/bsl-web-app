import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";
import Style from "../Projects/Projects.module.css";
import {Col} from "react-bootstrap";
import ImgSkel from "./ImgSkel.jsx";

function ProjectItemSkel({count}) {
    return (
        Array(count).fill(0).map((item, index) => {
            return (
                <Col lg={4} md={6} className="mb-30" key={uid()}>
                    <ImgSkel
                        width={`100%`}
                        height={`250px`}
                        baseColor={`#cacaca`}
                        highlightColor={`#949393`}
                    />
                </Col>
            )
        })
    );
}

export default ProjectItemSkel;
