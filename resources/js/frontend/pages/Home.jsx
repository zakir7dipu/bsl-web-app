import React from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Hero from "../components/Hero";

function Home(props) {
    return (
        <>
            <HeaderMeta
                title="Home"
                url="/"
            />
            <Hero/>
        </>
    );
}

export default Home;
