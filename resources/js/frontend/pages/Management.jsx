import React from 'react';
import {useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";

function Management(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Management",
            url: "/management"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Management"
                page="Management"
            />
            <Breadcrumbs
                page="Management"
                breadcrumbs={breadcrumbs}
            />
        </>
    );
}

export default Management;
