import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorMessage} from "../../../../lib/helper.js";
import {saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import FileInput from "../../../components/inputFile/Index.jsx";

function General() {
    const {generalSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()

    const [siteName, setSiteName] = useState('');
    const [slogan, setSlogan] = useState('');
    const [siteLogo, setSiteLogo] = useState('');
    const [siteLogoLink, setSiteLogoLink] = useState("");
    const [siteFavicon, setSiteFavicon] = useState("");
    const [siteFaviconLink, setSiteFaviconLink] = useState("");
    const [siteSecLogo, setSiteSecLogo] = useState("");
    const [footerDetails, setFooterDetails] = useState("");

    const inputLogoHandler = (file) => {
        setSiteLogo(file[0])
        setSiteLogoLink(file[0])
    }

    const inputSecHandler = (file) => {
        setSiteSecLogo(file[0])
    }

    const inputFavIconHandler = (file) => {
        setSiteFavicon(file[0])
        setSiteFaviconLink(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!siteName) {
            errorMessage("Name is required.")
        } else {
            formData.append("site_name", siteName);
        }

        if (!slogan) {
            errorMessage("Slogan is required.")
        } else {
            formData.append("slogan", slogan);
        }

        if (!footerDetails) {
            errorMessage("Footer Details is required.")
        } else {
            console.log(footerDetails)
            formData.append("footer_detail", footerDetails);
        }

        if (siteLogo) {
            formData.append("site_logo", siteLogo);
        }
        if (siteFavicon) {
            formData.append("site_favicon", siteFavicon);
        }

        if (siteSecLogo) {
            formData.append("site_secondary_logo", siteSecLogo);
        }
        formData.append("type", 'general');

        if (siteName && slogan && footerDetails) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (Object.keys(generalSetting).length) {
            const {general} = generalSetting
            setSiteName(general?.site_name)
            setSlogan(general?.slogan)
            setSiteLogo(`/${general?.site_logo}`)
            setSiteFavicon(`/${general?.site_favicon}`)
            setSiteSecLogo(`/${general?.site_secondary_logo}`)
            setFooterDetails(general?.footer_detail)
        }
    }, [generalSetting])

    return (
        <>
            <div className="col-lg-8 col-sm-12 offset-2">
                <div className="card">
                    <div className="card-header">
                        <h4>General Information</h4>
                    </div>
                    <div className="card-body">
                        <form className="form-profile" onSubmit={requestHandler}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Site Name</label>
                                        <input
                                            type={`text`}
                                            className={`form-control`}
                                            value={siteName}
                                            onChange={e => setSiteName(e.target.value)}
                                            placeholder={`Website Name`}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Slogan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={slogan}
                                            onChange={e => setSlogan(e.target.value)}
                                            placeholder="Slogan Name"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <FileInput
                                            label={"Site Logo"}
                                            file={siteLogo}
                                            id={`siteLogo`}
                                            handler={inputLogoHandler}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <FileInput
                                            label={"Site Logo"}
                                            file={siteSecLogo}
                                            id={`siteSecLogo`}
                                            handler={inputSecHandler}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <FileInput
                                            label={"Site Favicon"}
                                            file={siteFavicon}
                                            id={"siteFavtion"}
                                            handler={inputFavIconHandler}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Footer Details</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="2"
                                            placeholder="Footer details"
                                            value={footerDetails}
                                            onChange={e => setFooterDetails(e.target.value)}
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
}

export default General;
