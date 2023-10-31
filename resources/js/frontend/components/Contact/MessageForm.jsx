import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {infoMessage, warningMessage} from "../../../lib/helper.js";
import {createUserMessages} from "../../../featurs/Messages/MessagesSlice.js";

function MessageForm({contact}) {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const resetHandler = () => {
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
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

        if (!subject) {
            warningMessage("Subject is required.")
        } else {
            formData.append("subject", subject);
        }
        if (!description) {
            warningMessage("Message is required.")
        } else {
            formData.append("description", description);
        }


        if (name && email && phone && subject && description) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createUserMessages(formData))
        }
        resetHandler();
    }

    return (
        <div className="col-lg-8 pl-70 md-pl-15">
            <div className="contact-widget">
                <div className="sec-title2 mb-40">
                    <span className="sub-text contact mb-15">{contact?.contact_sub_text}</span>
                    <h2 className="title testi-title" style={{float: "none"}}>{contact?.testi_title}</h2>
                </div>
                <div id="form-messages"></div>
                <form id="contact-form" onSubmit={requestHandler}>
                    <fieldset>
                        <div className="row">
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
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
                                    name="subject"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(e.target.value)
                                    }}/>
                            </div>

                            <div className="col-lg-12 mb-30">
                                <textarea
                                    className="from-control"
                                    id="description"
                                    name="description"
                                    placeholder="Your message Here"
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
            </div>
        </div>
    );
}

export default MessageForm;
