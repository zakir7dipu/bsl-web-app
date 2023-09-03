import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorMessage} from "../../../../lib/helper.js";
import {fetchAllSettings, fetchIndustrySettings, saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import Preloader from "../../../components/Preloader/Index.jsx";

function Contact() {

    const {isLoading,generalSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch();

    const [phone, setPhone] = useState("");
    const [whatsapp_number, setWhatsAppNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [sub_text, setSubText] = useState("");
    const [title, setTitle] = useState("");
    const [contact_sub_text, setContactSubText] = useState("");
    const [testi_title, setTestsTitle] = useState("");
    const [map, setMap] = useState("");


    const requestContactHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!phone) {
            errorMessage("Phone is required.")
        } else {
            formData.append("phone", phone);
        }

        if (!email) {
            errorMessage("Email is required.")
        } else {
            formData.append("mail", email);
        }

        if (address) {
            formData.append("address", address);
        }

        formData.append("whatsapp_number", whatsapp_number);
        formData.append("sub_text", sub_text);
        formData.append("title", title);
        formData.append("contact_sub_text", contact_sub_text);
        formData.append("testi_title", testi_title);
        formData.append("map", map);


        formData.append("type", 'contact_info');
        if (phone && email) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (Object.keys(generalSetting).length) {
            const {contact} = generalSetting
            setPhone(contact?.phone || " ")
            setWhatsAppNumber(contact?.whatsapp_number || "")
            setEmail(contact?.mail || "")
            setAddress(contact?.address || " ")
            setSubText(contact?.sub_text || "")
            setTitle(contact?.title || "")
            setContactSubText(contact?.contact_sub_text || "")
            setTestsTitle(contact?.testi_title || "")
            setMap(contact?.map || "")
        }
    }, [generalSetting]);

    if (!isLoading) {
    return (
        <>
            <div className="col-lg-12 col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Contact Information</h4>
                    </div>
                    <div className="card-body">
                        <form className="form-profile" onSubmit={requestContactHandler}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            className="form-control"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            placeholder="Contact Phone Number"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="email"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="2"
                                            placeholder="Footer details"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>WhatsApp Number</label>
                                        <input
                                            className="form-control"
                                            value={whatsapp_number}
                                            onChange={e => setWhatsAppNumber(e.target.value)}
                                            placeholder="WhatsApp Number (with +88)"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            className="form-control"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            placeholder="Title"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Get In Touch Title</label>
                                        <input
                                            className="form-control"
                                            value={testi_title}
                                            onChange={e => setTestsTitle(e.target.value)}
                                            placeholder="Get In touch title"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Contact Sub Text</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="2"
                                            placeholder="Contact sub text"
                                            value={sub_text}
                                            onChange={e => setSubText(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Get In Touch Sub Text</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="2"
                                            placeholder="Get In Touch Sub Text"
                                            value={contact_sub_text}
                                            onChange={e => setContactSubText(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Map</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="4"
                                            placeholder="Map iframe code here."
                                            value={map}
                                            onChange={e => setMap(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-primary px-3 float-right" type={"submit"}>Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
    } else {
        return <Preloader/>
    }
}

export default Contact;
