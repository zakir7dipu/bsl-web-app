import React from 'react';
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import Contact from "../../Settings/GeneralSettings/Contact.jsx";

function Index(props) {
    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Page Settings", url: "/bsl/admin/page-settings"
    }, {
        name: "Contact Settings", url: null
    }];


    return (
        <>
            <HeaderMeta
                title="About Settings"
                url="/bsl/admin/page-settings/contact"
            />
            <Breadcrumb list={breadcrumb}/>
            <Contact/>
        </>
    );
}

export default Index;
