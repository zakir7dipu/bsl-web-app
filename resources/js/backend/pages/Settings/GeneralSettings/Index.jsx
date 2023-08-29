import React from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import General from "./General.jsx";
import Newsletter from "./Newsletter.jsx";
import Contact from "./Contact.jsx";
import Backlink from "./Backlink.jsx";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";

function Index(props) {
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Settings",
            url: "/bsl/admin/settings"
        },
        {
            name: "General Settings",
            url: null
        }
    ]
    return (
        <>
            <HeaderMeta
                title="Settings | General"
                url="/bsl/admin/settings/general"
            />
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <General/>
                    <Contact/>
                    <Newsletter/>
                    <Backlink/>
                </div>
            </div>
        </>
    );
}

export default Index;
