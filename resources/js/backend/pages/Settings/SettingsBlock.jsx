import React from 'react';
import {Link} from "react-router-dom";

function SettingsBlock(props) {
    return (
        <>
            <div className="col-lg-3 col-sm-6">
                <Link to="general" className="card gradient-2">
                    <div className="card-body">
                        <h3 className="card-title text-white">General Settings</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-gears"></i></span>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
                <Link to="about" className="card gradient-3">
                    <div className="card-body">
                        <h3 className="card-title text-white">About Settings</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-address-book"></i></span>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
                <Link to="slider" className="card gradient-4">
                    <div className="card-body">
                        <h3 className="card-title text-white">Slider Settings</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-list-alt"></i></span>
                    </div>
                </Link>
            </div>

            <div className="col-lg-3 col-sm-6">
                <Link to="seo" className="card gradient-1">
                    <div className="card-body">
                        <h3 className="card-title text-white">SEO Settings</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-search-plus"></i></span>
                    </div>
                </Link>
            </div>

            <div className="col-lg-3 col-sm-6">
                <Link to="technology" className="card gradient-5">
                    <div className="card-body">
                        <h3 className="card-title text-white">Technology Settings</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-gear"></i></span>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
                <Link to="align-with" className="card gradient-6">
                    <div className="card-body">
                        <h3 className="card-title text-white">We Align With</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-handshake-o"></i></span>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default SettingsBlock;
