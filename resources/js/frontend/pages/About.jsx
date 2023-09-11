import React, {useEffect} from 'react';
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Preloader from "../components/Preloader/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";
import {fetchAboutUs} from "../../featurs/AboutUs/AboutUsSlice.js";
import OurCompany from "../components/OurCompany/index.jsx";
function About(props) {
    const {isLoading, abouts} = useSelector(state => state.aboutsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAboutUs())
    }, [dispatch])

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Our Company",
            url: "/about"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Our Company"
                page="Our Company"
            />
            <Breadcrumbs
                page="Our Company"
                breadcrumbs={breadcrumbs}
            />
            <OurCompany about={abouts} />

        </>
    );
}

export default About;
