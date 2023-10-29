import React, {useEffect} from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import {useSelector} from "react-redux";
import Industry from "../components/Industry";
import Technology from "../components/Technology";
import Partner from "../components/Partner";
import Client from "../components/Client";
import Schedule from "../components/Schedule";
import Preloader from "../components/Preloader/index.jsx";
import Service from "../components/Services/Index.jsx";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";

function Home(props) {
    const {isLoading} = useSelector(state => state.generalSettings)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        {isLoading && <Preloader/>}
        <HeaderMeta
            title="Home"
            page="Home"
        />
        <Hero/>
        <Partner/>
        <HomeAbout/>
        <Industry/>
        <Technology/>
        <Service/>
        <Projects/>
        <Blogs/>
        <Testimonials/>
        <Client/>
        <Schedule/>
    </>);
}

export default Home;
