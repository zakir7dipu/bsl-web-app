import React, {useEffect} from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeoData} from "../../featurs/SEOSlice/SEOSlice.js";
import Industry from "../components/Industry";
import Technology from "../components/Technology";

function Home(props) {

    return (
        <>
            <HeaderMeta
                title="Home"
                page="Home"
            />
            <Hero/>
            <HomeAbout/>
            <Industry/>
            <Technology/>
        </>
    );
}

export default Home;
