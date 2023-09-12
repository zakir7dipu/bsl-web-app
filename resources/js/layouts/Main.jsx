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
import ServiceSetting from "../backend/pages/PageSettings/ServiceSetting/index.jsx"
import CaseStudySetting from "../backend/pages/PageSettings/CaseStudySetting/index.jsx"
import BlogSetting from "../backend/pages/PageSettings/BlogSetting/index.jsx"
import TestimonialSetting from "../backend/pages/PageSettings/TestimonialSetting/index.jsx"

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
import CaseStudy from "../backend/pages/CaseStudy";
import Testimonial from "../backend/pages/Testimonial";
import GeneralPages from "../backend/pages/GeneralPage";
import Messages from "../backend/pages/Messages";
import BackendSubscribers from "../backend/pages/Subscribers";

import {checkAccess, refreshLoginData} from "../featurs/AuthAction/AuthSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSettings} from "../featurs/Settings/SettingsSlice.js";
import TestPage from "../backend/pages/TestPage.jsx";
import Frontend from "./Frontend.jsx";
import About from "../frontend/pages/About.jsx";
import Management from "../frontend/pages/Management.jsx";
import Team from "../frontend/pages/Team.jsx";
import FrontendServiceCategory from "../frontend/pages/ServiceCategory.jsx";
import Courses from "../frontend/pages/Courses";
import Contact from "../frontend/pages/Contact.jsx";
import Blog from "../frontend/pages/Blog/index.jsx";
import AllCourses from "../frontend/pages/Courses/allCourses.jsx";
import CategoryCourses from "../frontend/pages/CategoryCourses";

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
                <Route path="/service/:slug/details" element={<FrontendServiceCategory/>}/>
                <Route path="/training/:slug/courses" element={<CategoryCourses/>}/>
                <Route path="/courses/:slug">
                    <Route index element={<AllCourses/>}/>
                </Route>
                <Route path="/blog">
                    <Route index element={<Blog/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="/bsl" element={<Backend/>}>
                <Route path="login" element={<Login/>}/>
                {/*{isAccess &&*/}
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
                        <Route path="service" element={<ServiceSetting/>}/>
                        <Route path="case-study" element={<CaseStudySetting/>}/>
                        <Route path="blogs" element={<BlogSetting/>}/>
                        <Route path="testimonial" element={<TestimonialSetting/>}/>
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
                    <Route path="case-study" element={<CaseStudy/>}/>
                    <Route path="testimonial" element={<Testimonial/>}/>
                    <Route path="pages" element={<GeneralPages/>}/>
                    <Route path="messages" element={<Messages/>}/>
                    <Route path="subscribers" element={<BackendSubscribers/>}/>
                </Route>
                {/*}*/}
            </Route>
            <Route path="*" element={<Errors/>}/>
        </Routes>
    );
}

export default Main;
