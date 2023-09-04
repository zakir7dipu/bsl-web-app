import React from 'react';
import {useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";

function Team(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Team",
            url: "/team"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Team"
                page="Team"
            />
            <Breadcrumbs
                page="Team"
                breadcrumbs={breadcrumbs}
            />
        </>
    );
}

export default Team;
