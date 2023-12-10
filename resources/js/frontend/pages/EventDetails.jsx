import Preloader from "@/frontend/components/Preloader/index.jsx";
import HeaderMeta from "@/ui/HeaderMeta.jsx";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import EventSchedule from "../components/Events/EventSchedule.jsx";
import EventAbout from "../components/Events/EventAbout.jsx";
import EventHero from "../components/Events/EventHero.jsx";
import {fetchAllWorkshopSeminar, showWorkshopSeminar} from "../../featurs/WorkshopSeminar/WorkshopSlice.js";

function EventDetails() {
    const {slug} = useParams();

    const {
        isLoading,
        metaInfo,
        workshops,
    } = useSelector((state) => state.workshopSeminarReducer);

    const {sliderSetting} = useSelector(state => state.generalSettings)

    const dispatch = useDispatch();

    console.log(metaInfo)

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Events",
            url: "/events"
        },
        {
            name: `${metaInfo?.name}`,
            url: null
        },
    ]

    useEffect(() => {
        dispatch(showWorkshopSeminar(slug));
    }, [dispatch, slug]);

    useEffect(() => {
        dispatch(fetchAllWorkshopSeminar());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Events Details"
                    page="Event Details"
                />

                <EventHero metaInfo={metaInfo}/>
                <EventAbout metaInfo={metaInfo}/>
                <EventSchedule eventSchedule={metaInfo?.workshop_days}/>

                {/*<div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-lg-4 col-md-12 order-last">*/}
                {/*                <div className="widget-area">*/}
                {/*                    <EventSearch/>*/}
                {/*                    <div className="recent-posts mb-50">*/}
                {/*                        <div className="widget-title">*/}
                {/*                            <h3 className="title" style={{float: "none"}}>Latest Events</h3>*/}
                {/*                        </div>*/}
                {/*                        {*/}
                {/*                            !isLoading && workshops.slice(0, 3).map(workshop => <LatestPost*/}
                {/*                                workshop={workshop} key={uid()}/>)*/}
                {/*                        }*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-8 pr-35 md-pr-15">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-lg-12 mb-50">*/}
                {/*                        <div className="blog-item">*/}
                {/*                            <div className="blog-img">*/}
                {/*                                <Link to={`/event/${metaInfo?.slug}/details`}>*/}
                {/*                                    <img src={useInternalLink(metaInfo?.image_link)}*/}
                {/*                                         alt={metaInfo?.name}/>*/}
                {/*                                </Link>*/}
                {/*                                <ul className="post-categories">*/}
                {/*                                    <li><Link to="#">{metaInfo?.type && ucFirst(metaInfo?.type)}</Link>*/}
                {/*                                    </li>*/}
                {/*                                </ul>*/}
                {/*                            </div>*/}
                {/*                            <div className="blog-content">*/}
                {/*                                <h3 className="blog-title"><Link*/}
                {/*                                    to={`/event/${metaInfo?.slug}/details`}>{metaInfo?.name}</Link></h3>*/}
                {/*                                <div className="blog-meta">*/}
                {/*                                    <ul className="btm-cate">*/}
                {/*                                        <li>*/}
                {/*                                            <div className="blog-date">*/}
                {/*                                                <i className="fa fa-calendar-check-o"></i> {moment(metaInfo?.form_date).format("LL")}*/}
                {/*                                            </div>*/}
                {/*                                        </li>*/}
                {/*                                        <li>*/}
                {/*                                            <div className="author">*/}
                {/*                                                <i className="fa fa-user-o"></i> {metaInfo?.sponsors}*/}
                {/*                                            </div>*/}
                {/*                                        </li>*/}
                {/*                                    </ul>*/}
                {/*                                </div>*/}
                {/*                                <div className="blog-desc"*/}
                {/*                                     dangerouslySetInnerHTML={{__html: metaInfo?.description}}>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}

                {/*                            <div className="blog-content">*/}
                {/*                                {metaInfo?.workshop_days && metaInfo?.workshop_days.map((day, index) =>*/}
                {/*                                    <div*/}
                {/*                                        id={`accordion-${index}`} key={uid()} className="accordion">*/}
                {/*                                        <div className="card">*/}
                {/*                                            <div className="card-header">*/}
                {/*                                                <h5 className="mb-0" data-toggle="collapse"*/}
                {/*                                                    data-target={`#collapse${day?.id}`}*/}
                {/*                                                    aria-expanded="true"*/}
                {/*                                                    aria-controls={`collapse${day?.id}`}>*/}
                {/*                                                    <i className="fa"*/}
                {/*                                                       aria-hidden="true"></i> {day?.title}*/}
                {/*                                                </h5>*/}
                {/*                                            </div>*/}
                {/*                                            <div id={`collapse${day?.id}`} className="collapse show"*/}
                {/*                                                 data-parent={`#accordion-${day?.id}`}>*/}
                {/*                                                <div className="card-body">*/}
                {/*                                                    <table*/}
                {/*                                                        className="table table-responsive table-bordered"*/}
                {/*                                                        width="100%">*/}
                {/*                                                        <thead>*/}
                {/*                                                        <tr>*/}
                {/*                                                            <th style={{width: "25%"}}>Title</th>*/}
                {/*                                                            <th style={{width: "15%"}}>Host</th>*/}
                {/*                                                            <th style={{width: "10%"}}>Start At</th>*/}
                {/*                                                            <th style={{width: "10%"}}>End At</th>*/}
                {/*                                                            <th style={{width: "30%"}}>Topics</th>*/}
                {/*                                                        </tr>*/}
                {/*                                                        </thead>*/}
                {/*                                                        <tbody>*/}
                {/*                                                        {day?.workshop_sessions && day?.workshop_sessions.map(slot => {*/}
                {/*                                                            return <tr key={uid()}>*/}
                {/*                                                                <td>{slot?.title}</td>*/}
                {/*                                                                <td>{slot?.session_hosts?.host?.name}</td>*/}
                {/*                                                                <td>{toStringTime(slot?.from)}</td>*/}
                {/*                                                                <td>{toStringTime(slot?.to)}</td>*/}
                {/*                                                                <td><p*/}
                {/*                                                                    dangerouslySetInnerHTML={{__html: slot?.topics}}></p>*/}
                {/*                                                                </td>*/}
                {/*                                                            </tr>*/}
                {/*                                                        })}*/}
                {/*                                                        </tbody>*/}
                {/*                                                    </table>*/}

                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                    </div>)}*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        )
            ;
    } else {
        return <Preloader/>
    }

}

export default EventDetails;
