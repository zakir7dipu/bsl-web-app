import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorMessage} from "../../../../lib/helper.js";
import {saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";

function Newsletter() {

    const {generalSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [brief, setText] = useState("");

    const requestNewsletterHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!title) {
            errorMessage("Title is required.")
        } else {
            formData.append("title", title);
        }

        if (!brief) {
            errorMessage("Text is required.")
        } else {
            formData.append("text", brief);
        }

        formData.append("type", 'newsletter');
        if (title && brief) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (Object.keys(generalSetting).length) {
            const {newsletter} = generalSetting
            setTitle(newsletter?.title)
            setText(newsletter?.text)
        }
    }, [generalSetting])

    return (

        <div className="col-lg-8 col-sm-12 offset-2">
            <div className="card">
                <div className="card-header">
                    <h4>NewsLetter Information</h4>
                </div>
                <div className="card-body">
                    <form className="form-profile" onSubmit={requestNewsletterHandler}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        className="form-control"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder="Newsletter Title"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Text</label>
                                    <textarea
                                        className="form-control"
                                        name="textarea"
                                        id="textarea" cols="30"
                                        rows="2"
                                        placeholder="Footer details"
                                        value={brief}
                                        onChange={e => setText(e.target.value)}
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
    );
}

export default Newsletter;
