import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchScheduleSettings} from "../../../featurs/Settings/SettingsSlice.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../lib/helper.js";
import BizModal from "../../../ui/BizzModal.jsx";
import {createSchedules} from "../../../featurs/Schedule/ScheduleSlice.js";

function Index(props) {

    const {isLoading, scheduleSetting} = useSelector(state => state.generalSettings)
    const dispatch = useDispatch();

    const [isShow, setIsShow] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const resetHandler = () => {
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setDescription('');
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", name);
        }

        if (!email) {
            warningMessage("Email is required.")
        } else {
            formData.append("email", email);
        }

        if (!phone) {
            warningMessage("Phone is required.")
        } else {
            formData.append("phone", phone);
        }

        if (!company) {
            warningMessage("Company is required.")
        } else {
            formData.append("company_name", company);
        }
        if (!description) {
            warningMessage("Requirement is required.")
        } else {
            formData.append("description", description);
        }

        if (name && email && phone && company && description) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createSchedules(formData))
        }
        resetHandler();
    }

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
                                <Link className="btn double-btn-one schedule-text col-md-6" to={`#`}
                                      onClick={() => {
                                          setIsShow(!isShow);
                                      }}>
                                    <i className="fa fa-phone"></i> {scheduleSetting?.btn_text_1}
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

            <BizModal isShow={isShow} title={`Get in Touch`} handleClose={handleModalClose} large={'lg'}>
                <form className="form-profile" onSubmit={requestHandler} id="contact-form">
                    <fieldset>
                        <div className="row">
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6 form-group">

                                <input
                                    className="from-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}/>
                            </div>
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input
                                    className="from-control"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/>
                            </div>
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input
                                    className="from-control"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}/>
                            </div>
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input
                                    className="from-control"
                                    type="text"
                                    id="subject"
                                    name="company"
                                    placeholder="Company Name"
                                    value={company}
                                    onChange={(e) => {
                                        setCompany(e.target.value)
                                    }}/>
                            </div>

                            <div className="col-lg-12 mb-30">
                                <textarea
                                    className="from-control"
                                    id="description"
                                    name="description"
                                    placeholder="Your requirement Here"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}/>
                            </div>
                        </div>
                        <div className="btn-part">
                            <div className="form-group mb-0">
                                <input className="reason learn-more submit" type="submit" value="Submit Now"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </BizModal>

        </div>
    );
}

export default Index;
