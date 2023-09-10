import React, {useEffect, useState} from 'react';
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchIndustrySettings, saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import {errorMessage, warningMessage} from "../../../../lib/helper.js";
import Preloader from "../../../components/Preloader/Index.jsx";
import {MdStar} from "react-icons/md";

function Index(props) {
    const {isLoading, industry} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()

    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Page Settings", url: "/bsl/admin/page-settings"
    }, {
        name: "Industry Settings", url: null
    }]

    const [title, setTitle] = useState("");
    const [subText, setSubText] = useState("");
    const [limit, setLimit] = useState("");

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!title) {
            warningMessage("Title is required.")
        } else {
            formData.append("title", title);
        }

        if (!subText) {
            warningMessage("Description is required.")
        } else {
            formData.append("sub_text", subText);
        }

        if (limit) {
            formData.append("limit", limit);
        }

        formData.append("type", 'industry');

        if (title && subText && limit) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (industry) {
            setTitle(industry?.title)
            setSubText(industry?.sub_text)
            setLimit(industry?.limit)
        }
    }, [industry])

    useEffect(() => {
        dispatch(fetchIndustrySettings())
    }, []);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Industry Settings"
                    url="/bsl/admin/page-settings/industry"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Industry Settings</h4>
                                </div>
                                <div className="card-body">
                                    <form className="form-profile" onSubmit={requestHandler}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Title <sup className="text-danger"><MdStar/></sup></label>
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
                                                    <label>Data Show Limit <sup className="text-danger"><MdStar/></sup></label>
                                                    <input
                                                        className="form-control"
                                                        value={limit}
                                                        onChange={e => setLimit(e.target.value)}
                                                        placeholder="Limit count"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Sub Text <sup className="text-danger"><MdStar/></sup></label>
                                                    <textarea
                                                        className="form-control"
                                                        name="textarea"
                                                        id="textarea" cols="30"
                                                        rows="3"
                                                        placeholder="Sub Text"
                                                        value={subText}
                                                        onChange={e => setSubText(e.target.value)}
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
    } else {
        return <Preloader/>
    }
}

export default Index;
