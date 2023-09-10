import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCaseStudy} from "../../../featurs/CaseStudy/CaseStudySlice.js";
import {uid, useInternalLink} from "../../../lib/helper.js";
import Style from "./Projects.module.css"
import ProjectItem from "./ProjectItem.jsx";

function Index(props) {
    const {isLoading, caseStudies} = useSelector(state => state.caseStudyReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllCaseStudy(6))
    },[])
    return (
        <div className="rs-project style4 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container-fluid">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">Projects</span>
                    <h2 className="title title2" style={{float: "none"}}>
                        Our Recent Launched Projects Available into Market
                    </h2>
                </div>
                <Row>
                    {caseStudies?.map(item=>{
                        const {image_link, technologies, name} = item
                        const tagArray = technologies.split(",")
                        return (
                            <ProjectItem
                                key={uid()}
                                imageLink={image_link}
                                tags={tagArray}
                                name={name}
                            />
                        )
                    })}


                </Row>
            </div>
        </div>
    );
}

export default Index;
