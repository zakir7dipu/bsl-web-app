import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../frontend/pages/Home.jsx";
import Login from "../auth/pages/Login.jsx";

import Backend from "./Backend.jsx";
import Admin from "../backend/pages";
import Dashboard from "../backend/pages/Dashboard.jsx";
import Errors from "../auth/pages/Errors.jsx";
import Profile from "../backend/pages/Profile/Index.jsx";
import SettingsMain from "../backend/pages/Settings/Index.jsx";
import SEO from "../backend/pages/Settings/SEO/Index.jsx";
import GeneralSetting from "../backend/pages/Settings/GeneralSettings/Index.jsx";
import Slider from "../backend/pages/PageSettings/Slider/Index.jsx";
import PageSettings from "../backend/pages/PageSettings/Index.jsx";
import IndustrySettings from "../backend/pages/PageSettings/IndustrySettings";
import TechnologySettings from "../backend/pages/PageSettings/TechnologySettings";
import AboutSettings from "../backend/pages/PageSettings/About";
import ContactSettings from "../backend/pages/PageSettings/Contact";

import Technology from "../backend/pages/Technology";
import Industries from "../backend/pages/Industries/Index.jsx";

import BackendAbout from "../backend/pages/Abouts";
import BackendManagement from "../backend/pages/Management";
import BackendTeams from "../backend/pages/Teams";

import {refreshLoginData} from "../featurs/AuthAction/AuthSlice.js";
import {useDispatch} from "react-redux";
import {fetchAllSettings} from "../featurs/Settings/SettingsSlice.js";
import TestPage from "../backend/pages/TestPage.jsx";
import Frontend from "./Frontend.jsx";

function Main() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshLoginData())
        dispatch(fetchAllSettings())
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Frontend/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="bsl" element={<Backend/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="admin" element={<Admin/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="test" element={<TestPage/>}/>
                    <Route path="settings">
                        <Route index element={<SettingsMain/>}/>
                        <Route path="seo" element={<SEO/>}/>
                        <Route path="general" element={<GeneralSetting/>}/>
                    </Route>
                    <Route path="page-settings">
                        <Route index element={<PageSettings/>}/>
                        <Route path="slider" element={<Slider/>}/>
                        <Route path="industry" element={<IndustrySettings/>}/>
                        <Route path="technology" element={<TechnologySettings/>}/>
                        <Route path="about" element={<AboutSettings/>}/>
                        <Route path="contact" element={<ContactSettings/>}/>
                    </Route>
                    <Route path="technology" element={<Technology/>}/>
                    <Route path="industries" element={<Industries/>}/>

                    <Route path="about-us" element={<BackendAbout/>}/>
                    <Route path="our-management" element={<BackendManagement/>}/>
                    <Route path="our-teams" element={<BackendTeams/>}/>
                </Route>
            </Route>
            <Route path="*" element={<Errors/>}/>
        </Routes>
    );
}

export default Main;
