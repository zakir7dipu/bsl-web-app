import React, {useEffect, useState} from 'react';
import {ucFirst, warningMessage} from "../../../../lib/helper.js";
import {MdStar} from "react-icons/md";
import {saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import {useDispatch} from "react-redux";

function Attribute({info, handler}) {
    const {title, bg, icon, hoverIcon, brief} = info
    const [inputTitle, setTitle] = useState("")
    const [inputIcon, setIcon] = useState([])
    const [inputHoverIcon, setHoverIcon] = useState([])
    const [inputBrief, setBrief] = useState("")

    const dispatch = useDispatch()

    const requestHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        if (!inputTitle) {
            warningMessage("Title Field is required")
        } else {
            formData.append("title", inputTitle)
        }

        if (inputIcon) {
            formData.append("icon", inputIcon)
        }

        if (inputHoverIcon) {
            formData.append("hover_icon", inputHoverIcon)
        }

        if (!inputBrief) {
            warningMessage("Brief Field is required")
        } else {
            formData.append("brief", inputBrief)
        }
        formData.append("section", "attributes")
        formData.append("topic", title)
        formData.append("type", 'about');
        if (inputTitle && inputBrief) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(()=>{
        setTitle(title || "")
        // setIcon(icon || "")
        // setHoverIcon(hoverIcon || "")
        setBrief(brief || "")
    },[info])

    return (
        <form onSubmit={requestHandler}>
            <div className="card">
                <div className="card-header">
                    <h4>{ucFirst(title || "")}</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Attribute Title <sup className="text-danger"><MdStar/></sup></label>
                        <input
                            className="form-control"
                            value={inputTitle}
                            placeholder="Project count"
                            type="text"
                            name={`${title.replaceAll(" ", "_")}_title`}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Attribute Icon</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={e => setIcon(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Attribute Secondary Icon</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={e => setHoverIcon(e.target.files[0])}
                        />

                    </div>
                    <div className="form-group mt-2">
                        <label>Attribute Brief <sup className="text-danger"><MdStar/></sup></label>
                        <textarea
                            className="form-control"
                            id="textarea" cols="30"
                            rows="3"
                            placeholder="Brief"
                            value={inputBrief}
                            onChange={e => setBrief(e.target.value)}
                        />
                    </div>

                    <div className="form-group mt-2">
                        <button className="btn btn-primary px-3 float-right"
                                type={"submit"}>Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Attribute;
