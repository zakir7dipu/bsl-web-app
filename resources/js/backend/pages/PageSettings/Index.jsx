import React from 'react';
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {Tab, Tabs} from "react-bootstrap";
import HomeTab from "./Home/Index.jsx";
import "./style.css";

function Index() {
    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Page Settings", url: null
    }]

    return (<>
        <HeaderMeta
            title="Page Settings"
            url="/bsl/admin/page-settings"
        />
        <Breadcrumb list={breadcrumb}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Pages</h4>
                            <Tabs
                                defaultActiveKey="home"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Home Page">
                                    <HomeTab/>
                                </Tab>
                                <Tab eventKey="about" title="About Page">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="contact" title="Contact Page">
                                    Tab content for Contact
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Index;
