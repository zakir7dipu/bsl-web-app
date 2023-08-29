import React from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";

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
                    SEO
                </div>
            </div>
        </>
    );
}

export default Index;
