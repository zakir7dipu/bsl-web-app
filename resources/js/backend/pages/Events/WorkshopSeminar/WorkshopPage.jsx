import Breadcrumb from "@/backend/components/Breadcrumb/Index.jsx";
import React from 'react';
import {Link, useParams} from "react-router-dom";

function WorkshopPage(props) {
    const {id} = useParams();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Config Events",
            url: null
        }
    ]

    return (
        <>
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Link to={`days/${id}`} className="card gradient-1">
                            <div className="card-body">
                                <h3 className="card-title text-white">Add Days and Sessions</h3>
                                <span className="float-right display-5 opacity-5"><i className="fa fa-gears"></i></span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to={`organizers/${id}`} className="card gradient-2">
                            <div className="card-body">
                                <h3 className="card-title text-white">Organizers</h3>
                                <span className="float-right display-5 opacity-5"><i className="fa fa-building-o"></i></span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to={`sponsors/${id}`} className="card gradient-5">
                            <div className="card-body">
                                <h3 className="card-title text-white">Strategic Partners</h3>
                                <span className="float-right display-5 opacity-5"><i className="fa fa-user-secret"></i></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkshopPage;
