import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchScheduleSettings} from "../../../featurs/Settings/SettingsSlice.js";
import {useInternalLink} from "../../../lib/helper.js";

function Index(props) {

    const {isLoading, scheduleSetting} = useSelector(state => state.generalSettings)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchScheduleSettings())
    }, [dispatch])

    return (
        <div className="rs-schedule">
            <Container>
                <div className="content-wrapper mx-auto schedule">
                    <div className="schedule-content text-center">
                        <div className="col-md-12 col-sm-12">
                            <h3 className="schedule-title">{scheduleSetting?.title}</h3>
                        </div>
                        <div className="col-md-12">
                            <div className="double-btn">
                                <Link className="btn double-btn-one schedule-text col-md-6" to={`#`}><i
                                    className="fa fa-phone"></i> {scheduleSetting?.btn_text_1}
                                </Link>
                                <span className="schedule-middle-btn col-md-2">OR</span>
                                <Link download className="btn double-btn-two col-md-6"
                                      to={useInternalLink(`/${scheduleSetting?.company_profile_link}`)}><i
                                    className="fa fa-paperclip"></i> {scheduleSetting?.btn_text_2}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Index;
