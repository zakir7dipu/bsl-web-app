import React from 'react';
import {useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";

function WebDevelopment(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Web Development",
            url: "/web-development"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Web Development"
                page="Web Development"
            />
            <Breadcrumbs
                page="Web Development"
                breadcrumbs={breadcrumbs}
            />
        </>
    );
}

export default WebDevelopment;
