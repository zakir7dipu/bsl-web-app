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
                <Link to="seo" className="card gradient-1">
                    <div className="card-body">
                        <h3 className="card-title text-white">SEO Settings</h3>
                        <span className="float-right display-5 opacity-5"><i className="fa fa-search-plus"></i></span>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default SettingsBlock;
