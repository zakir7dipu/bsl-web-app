import Preloader from "@/frontend/components/Preloader/index.jsx";
import HeaderMeta from "@/ui/HeaderMeta.jsx";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import EventSchedule from "../components/Events/EventSchedule.jsx";
import EventAbout from "../components/Events/EventAbout.jsx";
import EventHero from "../components/Events/EventHero.jsx";
import {
    fetchAllWorkshopSeminar,
    getSeminarHosts,
    showWorkshopSeminar
} from "../../featurs/WorkshopSeminar/WorkshopSlice.js";
import EventOrganizers from "../components/Events/EventOrganizers.jsx";
import EventPartners from "../components/Events/EventPartners.jsx";
import EventSpekar from "../components/Events/EventSpekar.jsx";
import EventContact from "../components/Events/EventContact.jsx";

function EventDetails() {
    const {slug} = useParams();

    const {
        isLoading,
        metaInfo,
        workshops,
        hosts
    } = useSelector((state) => state.workshopSeminarReducer);

    const {sliderSetting} = useSelector(state => state.generalSettings)

    const dispatch = useDispatch();

    console.log(hosts)

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
        dispatch(getSeminarHosts(slug));
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
                <EventSpekar eventHosts={hosts}/>
                <EventSchedule eventSchedule={metaInfo?.workshop_days} metaInfo={metaInfo}/>
                <EventOrganizers eventOrganizer={metaInfo?.organizers}/>
                <EventPartners eventPartner={metaInfo?.partners}/>
                <EventContact eventInfo={metaInfo}/>
            </>
        )
    } else {
        return <Preloader/>
    }

}

export default EventDetails;
