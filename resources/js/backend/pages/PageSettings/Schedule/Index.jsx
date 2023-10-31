import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {warningMessage} from "../../../../lib/helper.js";
import {fetchScheduleSettings, saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {MdStar} from "react-icons/md";
import Preloader from "../../../components/Preloader/Index.jsx";
import FileInput from "../../../components/inputFile/Index.jsx";

function Index(props) {
    const {isLoading, scheduleSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()

    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Page Settings", url: "/bsl/admin/page-settings"
    }, {
        name: "Schedule Settings", url: null
    }]

    const [title, setTitle] = useState("");
    const [btnTextOne, setBtnTextOne] = useState("");
    const [btnTextTwo, setBtnTextTwo] = useState("");
    const [companyProfile, setCompanyProfile] = useState("");


    const inputFileHandler = (file) => {
        setCompanyProfile(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!title) {
            warningMessage("Title is required.")
        } else {
            formData.append("title", title);
        }

        if (!btnTextOne) {
            warningMessage("Btn Text is required.")
        } else {
            formData.append("btn_text_1", btnTextOne);
        }

        if (!btnTextTwo) {
            warningMessage("Btn Text is required")
        } else {
            formData.append("btn_text_2", btnTextTwo);
        }

        if (!companyProfile) {
            warningMessage("Company Profile Link is required")
        } else {
            formData.append("company_profile_link", companyProfile);
        }

        formData.append("type", 'schedule');

        if (title && btnTextOne && btnTextTwo && companyProfile) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (scheduleSetting) {
            setTitle(scheduleSetting?.title || "")
            setBtnTextOne(scheduleSetting?.btn_text_1 || "")
            setBtnTextTwo(scheduleSetting?.btn_text_2 || "")
            setCompanyProfile(scheduleSetting?.company_profile_link || "")
        }
    }, [scheduleSetting])

    useEffect(() => {
        dispatch(fetchScheduleSettings())
    }, []);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Schedule Settings"
                    url="/bsl/admin/page-settings/schedule"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Schedule Settings</h4>
                                </div>
                                <div className="card-body">
                                    <form className="form-profile" onSubmit={requestHandler}>
                                        <div className="row">
                                            <div className="col-md-12">
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
                                                    <label>Btn Text One <sup
                                                        className="text-danger"><MdStar/></sup></label>
                                                    <input
                                                        className="form-control"
                                                        value={btnTextOne}
                                                        onChange={e => setBtnTextOne(e.target.value)}
                                                        placeholder="Btn Text One"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Btn Text Two<sup
                                                        className="text-danger"><MdStar/></sup></label>
                                                    <input
                                                        className="form-control"
                                                        value={btnTextTwo}
                                                        onChange={e => setBtnTextTwo(e.target.value)}
                                                        placeholder="Btn Text Two"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <FileInput
                                                        label={"Company Profile File"}
                                                        file={companyProfile}
                                                        id={"file"}
                                                        handler={inputFileHandler}
                                                        required
                                                        accept={`application/pdf`}
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
