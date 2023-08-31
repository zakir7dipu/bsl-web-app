import React from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";

function Index() {
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Page Settings",
            url: "/bsl/admin/page-settings"
        }, {
            name: "Technology",
            url: null
        }
    ];
    return (
        <>
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Technology Lists</h4>
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
