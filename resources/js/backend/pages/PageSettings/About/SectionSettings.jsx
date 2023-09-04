import React, {useEffect, useState} from 'react';
import {Col} from "react-bootstrap";
import {warningMessage} from "../../../../lib/helper.js";
import {useDispatch} from "react-redux";
import {saveAboutSettings, saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import {MdStar} from "react-icons/md";

function SectionSettings({SecSetting}) {
    const {title, brief, clients, project} = SecSetting
    const [iTitle, setTitle] = useState("");
    const [iBrief, setBrief] = useState("");
    const [iClients, setClients] = useState("");
    const [iProject, setProject] = useState("");

    const dispatch = useDispatch()

    const requestHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        if(!iTitle) {
            warningMessage("Section title field is required.")
        } else {
            formData.append("title", iTitle)
        }

        if(!iBrief) {
            warningMessage("Section brief field is required.")
        } else {
            formData.append("brief", iBrief)
        }

        if(!iClients) {
            warningMessage("Section clients count is required.")
        } else {
            formData.append("clients", iClients)
        }

        if(!iProject) {
            warningMessage("Section project count is required.")
        } else {
            formData.append("project", iProject)
        }

        formData.append("type", 'about');
        if (iTitle && iBrief && iClients && iProject) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (SecSetting) {
            setTitle(title || "")
            setBrief(brief || "")
            setClients(clients || "")
            setProject(project || "")
        }
    }, [SecSetting])

    return (
        <form className="row" onSubmit={requestHandler}>
            <Col md={12} className="form-group">
                <label>Title <sup className="text-danger"><MdStar/></sup></label>
                <input
                    className="form-control"
                    value={iTitle || ""}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="About title"
                    type="text"
                />
            </Col>
            <Col md={6} className="form-group">
                <label>Clients <sup className="text-danger"><MdStar/></sup></label>
                <input
                    className="form-control"
                    value={iClients}
                    onChange={e => setClients(e.target.value)}
                    placeholder="Clients count"
                    type="number"
                />
            </Col>
            <Col md={6} className="form-group">
                <label>Project <sup className="text-danger"><MdStar/></sup></label>
                <input
                    className="form-control"
                    value={iProject}
                    onChange={e => setProject(e.target.value)}
                    placeholder="Project count"
                    type="number"
                />
            </Col>
            <Col md={12} className="form-group">
                <label>Brief <sup className="text-danger"><MdStar/></sup></label>
                <textarea
                    className="form-control"
                    name="textarea"
                    id="textarea" cols="30"
                    rows="3"
                    placeholder="Brief"
                    value={iBrief || ""}
                    onChange={e => setBrief(e.target.value)}
                />
            </Col>
            <Col md={12} className="d-flex align-items-center">
                <button className="btn btn-primary px-3 float-right"
                        type={"submit"}>Save
                </button>
            </Col>
        </form>
    );
}

export default SectionSettings;
