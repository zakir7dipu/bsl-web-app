import React from 'react';
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import SettingsBlock from "./SettingsBlock.jsx";

function Index(props) {

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Settings",
            url: null
        }
    ]

    return (
        <>
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <SettingsBlock/>
                </div>
            </div>
        </>
    );
}

export default Index;
