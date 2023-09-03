import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAboutSettings} from "../../../../featurs/Settings/SettingsSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {uid} from "../../../../lib/helper.js";
import Attribute from "./Attribute.jsx";
import SectionSettings from "./SectionSettings.jsx";

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


    const [attributes, setAttributes] = useState([]);


    const requestAttributeHandler = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (aboutSetting) {
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
                                <h4 className="card-title">About Section Settings</h4>
                            </div>
                            <div className="card-body">

                                <div className="form-profile">
                                    <SectionSettings
                                        SecSetting={aboutSetting}
                                    />

                                    <div className="row mt-5">
                                        {attributes && Array.from(attributes).map(attrbute => {
                                            return (
                                                <div className="col-md-6" key={uid()}>
                                                    <Attribute
                                                        info={attrbute}
                                                        handler={requestAttributeHandler}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
