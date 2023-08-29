import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorMessage} from "../../../../lib/helper.js";
import {saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";

function Contact(props) {

    const {generalSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()
    console.log(generalSetting)
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


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
            formData.append("email", email);
        }

        if (address) {
            formData.append("address", address);
        }
        formData.append("type", 'contact_info');
        if (phone && email) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        setPhone(generalSetting?.contact?.phone)
        setEmail(generalSetting?.contact?.mail)
        setAddress(generalSetting?.contact?.address)
    }, [generalSetting])

    return (
        <>
            <div className="col-lg-8 col-sm-12 offset-2">
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
                                        <input className="form-control" value={phone}
                                               onChange={(e) => {
                                                   setPhone(e.target.value)
                                               }} placeholder="Website Name" type="text"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" value={email}
                                               onChange={(e) => {
                                                   setEmail(e.target.value)
                                               }} placeholder="email" type="text"/>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" name="textarea" id="textarea" cols="30"
                                                  rows="2"
                                                  placeholder="Footer details" value={address}
                                                  onChange={(e) => {
                                                      setAddress(e.target.value)
                                                  }}></textarea>
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
}

export default Contact;
