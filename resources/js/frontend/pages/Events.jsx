import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWorkshopSeminar} from "../../featurs/WorkshopSeminar/WorkshopSlice.js";
import Breadcrumbs from "../../frontend/components/Breadcrumbs/index.jsx";
import LatestPost from "../../frontend/components/Events/LatestPost.jsx";
import {uid} from "../../lib/helper.js";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Preloader from "../components/Preloader";
import EventPost from "../components/Events/EventPost.jsx";

function Events() {

    const {
        isLoading,
        workshops,
    } = useSelector((state) => state.workshopSeminarReducer);
    const dispatch = useDispatch();

    //console.log(workshops)

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

    if (!isLoading) {
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
                                        workshops.map((model, index) => {
                                            // console.log(model)
                                           return (
                                               <EventPost
                                                   key={index}
                                                   eventInfo={model}
                                               />
                                           )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Preloader/>
    }

}

export default Events;
