import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {infoMessage, warningMessage} from "../../../lib/helper.js";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import BizModal from "../../../ui/BizzModal.jsx";
import {createEventUser} from "../../../featurs/WorkshopUsers/WorkshopUsersSlice.js";

function EventContact({eventInfo}) {

    const dispatch = useDispatch();

    const [isShow, setIsShow] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [designation, setDesignation] = useState("");
    const [linkedin, setLinkedIn] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const resetHandler = () => {
        setName('');
        setEmail('');
        setPhone('');
        setDesignation('');
        setLinkedIn('');
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

        if (!designation) {
            warningMessage("Designation is required.")
        } else {
            formData.append("designation", designation);
        }

        if (linkedin) {
            formData.append("linkedin", linkedin);
        }

        formData.append("workshop_seminar_id", eventInfo?.id);

        if (name && email && phone && designation) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createEventUser(formData))
        }
        resetHandler();
    }

    return (
        <div className="rs-schedule">
            <Container>
                <div className="content-wrapper mx-auto schedule">
                    <div className="schedule-content text-center">
                        <div className="col-md-12 col-sm-12">
                            <h3 className="schedule-title">Level Up Your Growth With the Finest Solutions
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <div className="double-btn">
                                <Link className="btn double-btn-one schedule-text col-md-6" to={`#`}
                                      onClick={() => {
                                          setIsShow(!isShow);
                                      }}>
                                    <i className="fa fa-phone"></i> Registration
                                </Link>
                                <span className="schedule-middle-btn col-md-2">OR</span>
                                <a target="__blank" href={`/`}
                                   className="btn double-btn-two col-md-6"><i
                                    className="fa fa-paperclip"></i> Event Bruiser
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <BizModal isShow={isShow} title={`Event  Registration`} handleClose={handleModalClose} large={'lg'}>
                <form className="form-profile schedule-form" onSubmit={requestHandler} id="contact-form">
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
                                    id="designation"
                                    name="designation"
                                    placeholder="Your Designation"
                                    value={designation}
                                    onChange={(e) => {
                                        setDesignation(e.target.value)
                                    }}/>
                            </div>

                            <div className="col-lg-12 mb-30">
                                <textarea
                                    className="from-control"
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="Your Linkedin profile link here"
                                    value={linkedin}
                                    onChange={(e) => {
                                        setLinkedIn(e.target.value)
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

export default EventContact;
