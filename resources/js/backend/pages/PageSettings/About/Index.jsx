import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAboutSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {ucFirst, uid} from "../../../../lib/helper.js";

function Index(props) {
const {isLoading, aboutSetting} = useSelector(state => state.generalSettings);
const dispatch = useDispatch();

const breadcrumb = [{
name: "Dashboard", url: "/bsl/admin"
}, {
name: "Page Settings", url: "/bsl/admin/page-settings"
}, {
name: "About Settings", url: null
}];

const [title, setTitle] = useState("");
const [brief, setBrief] = useState("");
const [clients, setClients] = useState("");
const [project, setProject] = useState("");
const [attributes, setAttributes] = useState("");

const requestHandler = (e) => {
e.preventDefault();
}

useEffect(() => {
if (aboutSetting) {
setTitle(aboutSetting?.title)
setBrief(aboutSetting?.brief)
setClients(aboutSetting?.clients)
setProject(aboutSetting?.project)
setAttributes(aboutSetting?.attributes)
}
}, [aboutSetting])


useEffect(() => {
dispatch(fetchAboutSettings())
}, []);
return (
<>
<HeaderMeta
    title="About Settings"
    url="/bsl/admin/page-settings/about"
/>
<Breadcrumb list={breadcrumb}/>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">About Settings</h4>
                </div>
                <div className="card-body">

                    <form className="form-profile" onSubmit={requestHandler}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        className="form-control"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder="About title"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Clients</label>
                                    <input
                                        className="form-control"
                                        value={clients}
                                        onChange={e => setClients(e.target.value)}
                                        placeholder="Clients count"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Project</label>
                                    <input
                                        className="form-control"
                                        value={project}
                                        onChange={e => setProject(e.target.value)}
                                        placeholder="Project count"
                                        type="number"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Brief</label>
                                    <textarea
                                        className="form-control"
                                        name="textarea"
                                        id="textarea" cols="30"
                                        rows="3"
                                        placeholder="Brief"
                                        value={brief}
                                        onChange={e => setBrief(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="row">
                                    {attributes && Array.from(attributes).map(attrbute => {
                                        return (
                                            <div className="col-md-6" key={uid()}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4>{ucFirst(attrbute?.title)}</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="form-group">
                                                            <label>Attribute Title
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                value={project}
                                                                onChange={e => setProject(e.target.value)}
                                                                placeholder="Project count"
                                                                type="number"
                                                            />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label>BG Colour
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                value={project}
                                                                onChange={e => setProject(e.target.value)}
                                                                placeholder="Project count"
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label>Attribute Icon
                                                            </label>

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label>Attribute Secondary Icon
                                                            </label>

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label>Attribute Brief
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                name="textarea"
                                                                id="textarea" cols="30"
                                                                rows="3"
                                                                placeholder="Brief"
                                                                value={brief}
                                                                onChange={e => setBrief(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
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
