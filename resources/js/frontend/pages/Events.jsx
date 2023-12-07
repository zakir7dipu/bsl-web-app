import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWorkshopSeminar} from "../../featurs/WorkshopSeminar/WorkshopSlice.js";
import Breadcrumbs from "../../frontend/components/Breadcrumbs/index.jsx";
import EventPost from "../../frontend/components/Events/EventPost.jsx";
import EventSearch from "../../frontend/components/Events/EventSearch.jsx";
import LatestPost from "../../frontend/components/Events/LatestPost.jsx";
import {uid} from "../../lib/helper.js";
import HeaderMeta from "../../ui/HeaderMeta.jsx";

function Events(props) {

    const {
        isLoading,
        workshops,
    } = useSelector((state) => state.workshopSeminarReducer);
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Events",
            url: "/events"
        },
    ]

    useEffect(() => {
        dispatch(fetchAllWorkshopSeminar());
    }, [dispatch]);

    return (
        <>
            <HeaderMeta
                title="Events"
                page="Events"
            />
            <Breadcrumbs
                page="Events"
                breadcrumbs={breadcrumbs}
            />

            <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 order-last">
                            <div className="widget-area">
                                <EventSearch/>
                                <div className="recent-posts mb-50">
                                    <div className="widget-title">
                                        <h3 className="title" style={{float: "none"}}>Latest Events</h3>
                                    </div>
                                    {
                                        !isLoading && workshops.slice(0, 3).map(workshop => <LatestPost
                                            workshop={workshop} key={uid()}/>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 pr-35 md-pr-15">
                            <div className="row">
                                {
                                    !isLoading && workshops.map(workshop => <EventPost key={uid()}
                                                                                       workshop={workshop}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;
