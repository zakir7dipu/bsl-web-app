import React from 'react';
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";
import Style from "./Projects.module.css";
import {Col} from "react-bootstrap";

function ProjectItem({imageLink, tags, name}) {
    return (
        <Col lg={4} md={6} className="mb-30">
            <div className="project-item">
                <div className="project-img">
                    <img style={{width: "446px", height:"312px"}} src={useInternalLink(imageLink)} alt=""/>
                </div>
                <div className="project-content">
                    <p className="category">
                        {tags?.map(tag=><Link className={Style.projectTags} to="#" key={uid()}>{tag}</Link>)}
                    </p>
                    <h3 className="title" style={{float: "none"}}><Link to="#">{name}</Link></h3>
                </div>
            </div>
        </Col>
    );
}

export default ProjectItem;
