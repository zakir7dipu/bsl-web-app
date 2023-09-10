import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {warningMessage} from "../../../../lib/helper.js";
import {fetchTestimonialSettings, saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {MdStar} from "react-icons/md";
import Preloader from "../../../components/Preloader/Index.jsx";

function Index(props) {
    const {isLoading, testimonialSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()

    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Page Settings", url: "/bsl/admin/page-settings"
    }, {
        name: "Case Study Settings", url: null
    }]

    const [title, setTitle] = useState("");
    const [subText, setSubText] = useState("");
    const [desc, setDesc] = useState("");
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
            warningMessage("Subtext is required.")
        } else {
            formData.append("sub_text", subText);
        }

        if (!desc) {
            warningMessage("Description is required.")
        } else {
            formData.append("desc", desc);
        }

        if (limit) {
            formData.append("limit", limit);
        }

        formData.append("type", 'testimonial');

        if (title && subText && limit) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (testimonialSetting) {
            setTitle(testimonialSetting?.title)
            setSubText(testimonialSetting?.sub_text)
            setLimit(testimonialSetting?.limit)
            setDesc(testimonialSetting?.desc)
        }
    }, [testimonialSetting])

    useEffect(() => {
        dispatch(fetchTestimonialSettings())
    }, []);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Industry Settings"
                    url="/bsl/admin/page-settings/case-study"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Testimonial Settings</h4>
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
                                                    <input
                                                        className="form-control"
                                                        value={subText}
                                                        onChange={e => setSubText(e.target.value)}
                                                        placeholder="Sub text"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Desc <sup className="text-danger"><MdStar/></sup></label>
                                                    <textarea
                                                        className="form-control"
                                                        name="textarea"
                                                        id="textarea" cols="30"
                                                        rows="3"
                                                        placeholder="Description"
                                                        value={desc}
                                                        onChange={e => setDesc(e.target.value)}
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
