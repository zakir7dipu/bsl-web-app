import WorkshopPage from "@/backend/pages/Events/WorkshopSeminar/WorkshopPage.jsx";
import EventDetails from "@/frontend/pages/EventDetails.jsx";
import Events from "@/frontend/pages/Events.jsx";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Errors from "../auth/pages/Errors.jsx";
import Login from "../auth/pages/Login.jsx";
import Admin from "../backend/pages";
import BackendAbout from "../backend/pages/Abouts";
import BackendBlogs from "../backend/pages/Blogs";
import CaseStudy from "../backend/pages/CaseStudy";
import BackendClients from "../backend/pages/Clients";
import CourseCreate from "../backend/pages/Courses/Create.jsx";
import BackendCurricular from "../backend/pages/Courses/Curricular";
import CourseEdit from "../backend/pages/Courses/Edit.jsx";
import BackendCourses from "../backend/pages/Courses/Index.jsx";
import Dashboard from "../backend/pages/Dashboard.jsx";

import Hosts from "../backend/pages/Events/Hosts";
import WorkshopSeminar from "../backend/pages/Events/WorkshopSeminar";
import WorkshopCreate from "../backend/pages/Events/WorkshopSeminar/Create.jsx";
import WorkshopEdit from "../backend/pages/Events/WorkshopSeminar/Edit.jsx";
import WorkshopOrganizer from "../backend/pages/Events/WorkshopSeminar/Organizers/Index.jsx";
import WorkshopDays from "../backend/pages/Events/WorkshopSeminar/SessionsDay/Index.jsx";
import WorkshopDaysSession from "../backend/pages/Events/WorkshopSeminar/SessionsDay/Sessions/Index.jsx";
import WorkshopSponsors from "../backend/pages/Events/WorkshopSeminar/Sponsors/Index.jsx";


import GeneralPages from "../backend/pages/GeneralPage";
import Industries from "../backend/pages/Industries/Index.jsx";
import BackendManagement from "../backend/pages/Management";
import Messages from "../backend/pages/Messages";
import AboutSettings from "../backend/pages/PageSettings/About";
import BlogSetting from "../backend/pages/PageSettings/BlogSetting/index.jsx"
import CaseStudySetting from "../backend/pages/PageSettings/CaseStudySetting/index.jsx"
import ContactSettings from "../backend/pages/PageSettings/Contact";
import PageSettings from "../backend/pages/PageSettings/Index.jsx";
import IndustrySettings from "../backend/pages/PageSettings/IndustrySettings";
import ScheduleSetting from "../backend/pages/PageSettings/Schedule/index.jsx"
import ServiceSetting from "../backend/pages/PageSettings/ServiceSetting/index.jsx"
import Slider from "../backend/pages/PageSettings/Slider/Index.jsx";
import TechnologySettings from "../backend/pages/PageSettings/TechnologySettings";
import TestimonialSetting from "../backend/pages/PageSettings/TestimonialSetting/index.jsx"
import BackendPartner from "../backend/pages/Partners";
import Profile from "../backend/pages/Profile/Index.jsx";
import BackendSchedule from "../backend/pages/Schedule";
import ServiceCategory from "../backend/pages/Services/Category";
import ServiceCategoryCreate from "../backend/pages/Services/Category/Create.jsx";
import ServiceCategoryEdit from "../backend/pages/Services/Category/Edit.jsx";
import BackendProduct from "../backend/pages/Services/Product/Index.jsx";
import GeneralSetting from "../backend/pages/Settings/GeneralSettings/Index.jsx";
import SettingsMain from "../backend/pages/Settings/Index.jsx";
import SEO from "../backend/pages/Settings/SEO/Index.jsx";
import BackendSubscribers from "../backend/pages/Subscribers";
import BackendTeams from "../backend/pages/Teams";

import Technology from "../backend/pages/Technology";
import Testimonial from "../backend/pages/Testimonial";
import TestPage from "../backend/pages/TestPage.jsx";

import {checkAccess, refreshLoginData} from "../featurs/AuthAction/AuthSlice.js";
import {fetchAllSettings} from "../featurs/Settings/SettingsSlice.js";
import About from "../frontend/pages/About.jsx";
import BlogDetails from "../frontend/pages/Blog/blogDetails.jsx";
import Blog from "../frontend/pages/Blog/index.jsx";
import CategoryCourses from "../frontend/pages/CategoryCourses";
import Contact from "../frontend/pages/Contact.jsx";
import CourseDetails from "../frontend/pages/CourseDetails";
import AllCourses from "../frontend/pages/Courses/allCourses.jsx";
import Home from "../frontend/pages/Home.jsx";
import Management from "../frontend/pages/Management.jsx";
import Pages from "../frontend/pages/Page.jsx";
import FrontendServiceCategory from "../frontend/pages/ServiceCategory.jsx";
import Team from "../frontend/pages/Team.jsx";

import Backend from "./Backend.jsx";
import Frontend from "./Frontend.jsx";

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
                <Route path="/service/:slug/details">
                    <Route index element={<FrontendServiceCategory/>}></Route>
                    <Route path="/service/:slug/details?pages=:page" element={<FrontendServiceCategory/>}/>
                </Route>
                <Route path="/training/:slug/courses">
                    <Route index element={<CategoryCourses/>}></Route>
                    <Route path="/training/:slug/courses?pages=:page" element={<CategoryCourses/>}></Route>
                </Route>
                <Route path="/courses/:slug">
                    <Route index element={<AllCourses/>}/>
                    <Route path="/courses/:slug?pages=:page" element={<AllCourses/>}/>
                </Route>
                <Route path="/course/:slug" element={<CourseDetails/>}/>
                <Route path="/blog">
                    <Route index element={<Blog/>}/>
                    <Route path="/blog?pages=:page" element={<Blog/>}/>
                    <Route path=":slug/details" element={<BlogDetails/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/event/:slug/details" element={<EventDetails/>}/>
                <Route path="/page/:slug" element={<Pages/>}/>
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
                        <Route path="schedule" element={<ScheduleSetting/>}/>
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
                    <Route path="schedule" element={<BackendSchedule/>}/>
                    <Route path="messages" element={<Messages/>}/>
                    <Route path="subscribers" element={<BackendSubscribers/>}/>
                    <Route path="hosts" element={<Hosts/>}/>
                    <Route path="workshops">
                        <Route index element={<WorkshopSeminar/>}/>
                        <Route path="create" element={<WorkshopCreate/>}/>
                        <Route path=":slug/edit" element={<WorkshopEdit/>}/>
                        <Route path="config/:id">
                            <Route index element={<WorkshopPage/>}/>
                            <Route path="organizers/:id" element={<WorkshopOrganizer/>}/>
                            <Route path="sponsors/:id" element={<WorkshopSponsors/>}/>
                            <Route path="days/:id">
                                <Route index element={<WorkshopDays/>}/>
                                <Route path="sessions/:id">
                                    <Route index element={<WorkshopDaysSession/>}/>
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                </Route>
                {/*}*/}
            </Route>
            <Route path="*" element={<Errors/>}/>
        </Routes>
    );
}

export default Main;
