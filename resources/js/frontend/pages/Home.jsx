import React, {useEffect} from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import {useDispatch, useSelector} from "react-redux";
import Industry from "../components/Industry";
import Technology from "../components/Technology";
import Partner from "../components/Partner";
import Client from "../components/Client";
import Preloader from "../components/Preloader/index.jsx";
import Service from "../components/Services/Index.jsx";

function Home(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
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
            <Client/>
            <Service/>
        </>);
}

export default Home;
