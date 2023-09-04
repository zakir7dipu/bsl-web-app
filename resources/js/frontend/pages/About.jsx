import React from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Preloader from "../components/Preloader/index.jsx";
import {useSelector} from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";

function About(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="About"
                page="About"
            />
            <Breadcrumbs
                page="About"
                breadcrumbs={breadcrumbs}
            />
        </>
    );
}

export default About;
