import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import "./style.css";

function MainCourse({course}) {
    const {name, thumbnail, video_id, curriculums, description, curriculum_text} = course;
    let tab1 = "Description", tab2 = "Curriculum";

    const tabStyle = 'nav nav-tabs';
    return (
        <>
            <div className="services-img">
                {video_id ? <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${video_id}`}
                                    title="YouTube video player" allow="accelerometer"></iframe> :
                    <img src={useInternalLink(thumbnail)} alt="" style={{width: "100%", height: "400"}}/>}
            </div>
            <Tabs>
                <div className="course-single-tab">
                    <TabList className={tabStyle}>
                        <Tab>
                            <button>{tab1}</button>
                        </Tab>
                        <Tab>
                            <button>{tab2}</button>
                        </Tab>
                    </TabList>
                    <div className="tab-content" id="back-tab-content">
                        <TabPanel>
                            <div className="tab-pane">
                                <h3>{name}</h3>
                                <h3>Course Overview:</h3>
                                <div dangerouslySetInnerHTML={{__html: description}}/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="tab-pane">
                                <h3>Course Curriculum</h3>
                                <div dangerouslySetInnerHTML={{__html: curriculum_text}}/>
                                {curriculums?.map((item, index) => {
                                    return (
                                        <div className="single-week" key={index}>
                                            <h3>{item?.name}</h3>
                                            <div dangerouslySetInnerHTML={{__html: item?.description}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </>
    );
}

export default MainCourse;
