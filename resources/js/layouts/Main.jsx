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
import Slider from "../backend/pages/Settings/Slider/Index.jsx";

import {refreshLoginData} from "../featurs/AuthAction/AuthSlice.js";
import {useDispatch} from "react-redux";
import {fetchAllSettings} from "../featurs/Settings/SettingsSlice.js";
import TestPage from "../backend/pages/TestPage.jsx";

function Main() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshLoginData())
        dispatch(fetchAllSettings())
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
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
                        <Route path="slider" element={<Slider/>}/>
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<Errors/>}/>
        </Routes>
    );
}

export default Main;
