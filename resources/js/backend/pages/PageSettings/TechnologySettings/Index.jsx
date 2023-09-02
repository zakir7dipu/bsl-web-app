import React from 'react';
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";

function Index(props) {
    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Page Settings", url: "/bsl/admin/page-settings"
    },{
        name: "Technology Settings", url: null
    },]
    return (
        <>
            <HeaderMeta
                title="Technology Settings"
                url="/bsl/admin/page-settings/technology"
            />
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Technology Settings</h4>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
