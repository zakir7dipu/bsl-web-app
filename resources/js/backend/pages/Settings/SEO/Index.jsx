import React from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import HomeSeo from "./HomeSeo.jsx";

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
                </div>
            </div>
        </>
    );
}

export default Index;
