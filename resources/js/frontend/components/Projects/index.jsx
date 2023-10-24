import React, {useEffect} from 'react';
import {Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCaseStudy} from "../../../featurs/CaseStudy/CaseStudySlice.js";
import {uid} from "../../../lib/helper.js";
import ProjectItem from "./ProjectItem.jsx";
import {fetchCaseStudySettings} from "../../../featurs/Settings/SettingsSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import ProjectsSkel from "../Skeletons/ProjectsSkel.jsx";

function Index(props) {
    const {isLoading, caseStudies} = useSelector(state => state.caseStudyReducer)
    const {caseStudySetting} = useSelector((state) => state.generalSettings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCaseStudySettings());
    }, [dispatch])

    useEffect(() => {
        const {limit} = caseStudySetting
        dispatch(fetchAllCaseStudy(limit))
    }, [caseStudySetting, dispatch])

    return (
        isLoading ? <ProjectsSkel/> :
        <div className="rs-project style4 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{caseStudySetting?.sub_text}</span>
                    <h2 className="title title2" style={{float: "none"}}>
                        {caseStudySetting?.title}
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
