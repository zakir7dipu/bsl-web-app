import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorMessage} from "../../../../lib/helper.js";
import {saveSettings} from "../../../../featurs/Settings/SettingsSlice.js";

function Backlink() {
    const {generalSetting} = useSelector(state => state.generalSettings);
    const dispatch = useDispatch()

    const [eshop, setShop] = useState("");
    const [facebook, setFb] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [youtube, setYoutube] = useState("");
    const [instagram, setInstagram] = useState("");

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!facebook) {
            errorMessage("Facebook is required.")
        } else {
            formData.append("facebook", facebook);
        }
        if (!linkedin) {
            errorMessage("Linkedin is required.")
        } else {
            formData.append("linkedin", linkedin);
        }

        formData.append("eshop", eshop);
        formData.append("youtube", youtube);
        formData.append("instagram", instagram);

        formData.append("type", 'backlink');
        if (facebook && linkedin) {
            dispatch(saveSettings(formData))
        }
    }

    useEffect(() => {
        if (Object.keys(generalSetting).length) {
            const {backlink} = generalSetting
            setShop(backlink?.eshop)
            setFb(backlink?.facebook)
            setLinkedin(backlink?.linkedin)
            setYoutube(backlink?.youtube)
            setInstagram(backlink?.instagram)
        }
    }, [generalSetting])

    return (
        <div className="col-lg-8 col-sm-12 offset-2">
            <div className="card">
                <div className="card-header">
                    <h4>BackLink Information</h4>
                </div>
                <div className="card-body">
                    <form className="form-profile" onSubmit={requestHandler}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Eshop</label>
                                    <input
                                        className="form-control"
                                        value={eshop}
                                        onChange={e => setShop(e.target.value)}
                                        placeholder="Eshop Link"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Facebook</label>
                                    <input
                                        className="form-control"
                                        value={facebook}
                                        onChange={e => setFb(e.target.value)}
                                        placeholder="Facebook Page Link"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Linkedin</label>
                                    <input
                                        className="form-control"
                                        value={linkedin}
                                        onChange={e => setLinkedin(e.target.value)}
                                        placeholder="LinkedIn Page Link"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Youtube</label>
                                    <input
                                        className="form-control"
                                        value={youtube}
                                        onChange={e => setYoutube(e.target.value)}
                                        placeholder="Youtube Page Link"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Instagram</label>
                                    <input
                                        className="form-control"
                                        value={instagram}
                                        onChange={e => setInstagram(e.target.value)}
                                        placeholder="Instagram Page Link"
                                        type="text"
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

export default Backlink;
