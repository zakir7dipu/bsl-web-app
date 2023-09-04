import React from 'react';
import {useSelector} from "react-redux";
import Preloader from "../../components/Preloader/index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/index.jsx";

function Index(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "All Blog",
            url: "/blog"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Blog"
                page="Blog"
            />
            <Breadcrumbs
                page="All Blog"
                breadcrumbs={breadcrumbs}
            />
        </>
    );
}

export default Index;
