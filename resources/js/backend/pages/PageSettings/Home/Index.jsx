import React from 'react';
import {Link} from "react-router-dom";

function Index(props) {
    return (
            <div className="row">
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
                    <Link to="technology" className="card gradient-5">
                        <div className="card-body">
                            <h3 className="card-title text-white">Technology Settings</h3>
                            <span className="float-right display-5 opacity-5"><i className="fa fa-gear"></i></span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <Link to="industry" className="card gradient-6">
                        <div className="card-body">
                            <h3 className="card-title text-white">Industry Settings</h3>
                            <span className="float-right display-5 opacity-5"><i
                                className="fa fa-handshake-o"></i></span>
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default Index;
