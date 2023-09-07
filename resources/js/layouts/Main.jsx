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
import BackendClients from "../backend/pages/Clients";
import BackendPartner from "../backend/pages/Partners";
import ServiceCategory from "../backend/pages/Services/Category";
import ServiceCategoryCreate from "../backend/pages/Services/Category/Create.jsx";
import ServiceCategoryEdit from "../backend/pages/Services/Category/Edit.jsx";
import BackendProduct from "../backend/pages/Services/Product/Index.jsx";
import BackendCourses from "../backend/pages/Courses/Index.jsx";
import CourseCreate from "../backend/pages/Courses/Create.jsx";
import CourseEdit from "../backend/pages/Courses/Edit.jsx";
import BackendCurricular from "../backend/pages/Courses/Curricular";
import BackendBlogs from "../backend/pages/Blogs";

import {checkAccess, refreshLoginData} from "../featurs/AuthAction/AuthSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSettings} from "../featurs/Settings/SettingsSlice.js";
import TestPage from "../backend/pages/TestPage.jsx";
import Frontend from "./Frontend.jsx";
import About from "../frontend/pages/About.jsx";
import Management from "../frontend/pages/Management.jsx";
import Team from "../frontend/pages/Team.jsx";
import SoftwareDevelopment from "../frontend/pages/SoftwareDevelopment.jsx";
import WebDevelopment from "../frontend/pages/WebDevelopment.jsx";
import AnalyticSolutions from "../frontend/pages/AnalyticSolutions.jsx";
import Courses from "../frontend/pages/Courses";
import Contact from "../frontend/pages/Contact.jsx";
import Blog from "../frontend/pages/Blog/index.jsx";

function Main() {
    const {isAccess} = useSelector(state => state.authUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkAccess())
        dispatch(refreshLoginData())
        dispatch(fetchAllSettings())
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Frontend/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/management" element={<Management/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/software-development" element={<SoftwareDevelopment/>}/>
                <Route path="/web-development" element={<WebDevelopment/>}/>
                <Route path="/analytic-solutions" element={<AnalyticSolutions/>}/>
                <Route path="/courses">
                    <Route index element={<Courses/>}/>
                </Route>
                <Route path="/blog">
                    <Route index element={<Blog/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="/bsl" element={<Backend/>}>
                <Route path="login" element={<Login/>}/>
                {isAccess &&
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
                        <Route path="clients" element={<BackendClients/>}/>
                        <Route path="partner" element={<BackendPartner/>}/>
                        <Route path="services">
                            <Route index element={<ServiceCategory/>}/>
                            <Route path="create" element={<ServiceCategoryCreate/>}/>
                            <Route path=":id/edit" element={<ServiceCategoryEdit/>}/>
                        </Route>
                        <Route path="products" element={<BackendProduct/>}/>
                        <Route path="courses">
                            <Route index element={<BackendCourses/>}/>
                            <Route path="create" element={<CourseCreate/>}/>
                            <Route path=":id/edit" element={<CourseEdit/>}/>
                            <Route path=":id/curricular" element={<BackendCurricular/>}/>
                        </Route>
                        <Route path="blogs" element={<BackendBlogs/>}/>
                    </Route>
                }
            </Route>
            <Route path="*" element={<Errors/>}/>
        </Routes>
    );
}

export default Main;
