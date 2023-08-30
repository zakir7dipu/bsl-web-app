import React from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import AboutUsSeo from "./AboutUsSeo.jsx";
import HomeSeo from "./HomeSeo.jsx";
import OurManagementSeo from "./OurManagementSeo.jsx";
import TeamSeo from "./TeamSeo.jsx";

function Index() {
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
            name: "SEO",
            url: null
        }
    ]

    return (
        <>
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <HomeSeo/>
                    <AboutUsSeo/>
                    <OurManagementSeo/>
                    <TeamSeo/>
                </div>
            </div>
        </>
    );
}

export default Index;
