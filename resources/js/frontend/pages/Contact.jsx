import React from 'react';
import {useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";

function Contact(props) {
    const {isLoading} = useSelector(state => state.generalSettings)
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Contact",
            url: "/contact"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Contact"
                page="Contact"
            />
            <Breadcrumbs
                page="Contact"
                breadcrumbs={breadcrumbs}
            />
        </>
    );
}

export default Contact;