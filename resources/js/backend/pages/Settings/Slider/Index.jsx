import React, {useEffect, useState} from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchSliderSettings, saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import {errorMessage} from "../../../../lib/helper.js";
import FileInput from "../../../components/inputFile/Index.jsx";

function Index(props) {
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Settings",
            url: "/bsl/admin/settings"
        }, {
            name: "Slider",
            url: null
        }
    ];

    const {sliderSetting} = useSelector(state => state.generalSettings);

    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [description, setText] = useState("");
    const [link, setLink] = useState("");
    const [btnText, setBtnText] = useState("");
    const [btnLink, setBtnLink] = useState("");

    const [imageLink, setImageLink] = useState("");

    const inputFileHandler = (file) => {
        setImageLink(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!title) {
            errorMessage("Title is required.")
        } else {
            formData.append("title", title);
        }

        if (!description) {
            errorMessage("Description is required.")
        } else {
            formData.append("text", description);
        }

        if (link) {
            formData.append("link", link);
        }

        if (btnText) {
            formData.append("btn_text", btnText);
        }

        if (btnLink) {
            formData.append("btn_link", btnLink);
        }

        if (imageLink) {
            formData.append("image_link", imageLink);
        }

        formData.append("type", 'slider');

        if (title && description) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (sliderSetting) {
            setTitle(sliderSetting?.title)
            setText(sliderSetting?.text)
            setLink(sliderSetting?.link)
            setBtnText(sliderSetting?.btn_text)
            setBtnLink(sliderSetting?.btn_link)
            setImageLink(sliderSetting?.image_link)
        }
    }, [sliderSetting])

    useEffect(() => {
        dispatch(fetchSliderSettings())
    }, []);


    return (
        <>
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 offset-2">
                        <div className="card">
                            <div className="card-header">
                                <h4>Slider Information</h4>
                            </div>
                            <div className="card-body">
                                <form className="form-profile" onSubmit={requestHandler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input
                                                    className="form-control"
                                                    value={title}
                                                    onChange={e => setTitle(e.target.value)}
                                                    placeholder="Slider title"
                                                    type="text"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Youtube Link</label>
                                                <input
                                                    className="form-control"
                                                    value={link}
                                                    onChange={e => setLink(e.target.value)}
                                                    placeholder="Youtube video link"
                                                    type="text"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Btn Text</label>
                                                <input
                                                    className="form-control"
                                                    value={btnText}
                                                    onChange={e => setBtnText(e.target.value)}
                                                    placeholder="Btn Btn Text"
                                                    type="text"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Btn Link</label>
                                                <input
                                                    className="form-control"
                                                    value={btnLink}
                                                    onChange={e => setBtnLink(e.target.value)}
                                                    placeholder="Btn Btn Link"
                                                    type="text"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <FileInput
                                                    label={"Slider Image"}
                                                    file={imageLink}
                                                    id={"avatar"}
                                                    handler={inputFileHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea
                                                    className="form-control"
                                                    name="textarea"
                                                    id="textarea" cols="30"
                                                    rows="3"
                                                    placeholder="Slider Details"
                                                    value={description}
                                                    onChange={e => setText(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-primary px-3 float-right"
                                                        type={"submit"}>Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
