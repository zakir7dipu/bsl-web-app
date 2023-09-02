import React, {useEffect} from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeoData} from "../../featurs/SEOSlice/SEOSlice.js";

function Home(props) {

    return (
        <>
            <HeaderMeta
                title="Home"
                page="Home"
            />
            <Hero/>
            <HomeAbout/>
        </>
    );
}

export default Home;
