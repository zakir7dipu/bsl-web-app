import React from 'react';
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {Tab, Tabs} from "react-bootstrap";
import HomeTab from "./Home/Index.jsx";
import "./style.css";
import {Link} from "react-router-dom";

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
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6">
                                            <Link to="about" className="card gradient-3">
                                                <div className="card-body">
                                                    <h3 className="card-title text-white">About Settings</h3>
                                                    <span className="float-right display-5 opacity-5"><i className="fa fa-address-book"></i></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contact Page">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6">
                                            <Link to="contact" className="card gradient-7">
                                                <div className="card-body">
                                                    <h3 className="card-title text-white">Contact Settings</h3>
                                                    <span className="float-right display-5 opacity-5"><i className="fa fa-map-marker"></i></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
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
