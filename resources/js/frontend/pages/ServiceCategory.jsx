import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";
import {showServiceData} from "../../featurs/Service/ServiceSlice.js";
import {useParams} from "react-router-dom";
import ServiceProduct from "../components/ServiceProduct";
import ServiceContent from "../components/ServiceContent/index.jsx";
import Courses from "./Courses";

function ServiceCategory(props) {
    const {slug} = useParams();

    const {
        isLoading, metaInfo,
    } = useSelector((state) => state.serviceReducer);

    const dispatch = useDispatch();


    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: `${metaInfo?.title}`,
            url: null
        },
    ];

    useEffect(() => {
        dispatch(showServiceData(slug));
    }, [slug])

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title={metaInfo?.title}
                    page={metaInfo?.title}
                />
                <Breadcrumbs
                    page={metaInfo?.title}
                    breadcrumbs={breadcrumbs}
                />
                {
                    metaInfo?.type === 'product' && <ServiceProduct service={metaInfo?.id}/>
                }
                {
                    metaInfo?.type === 'content' && <ServiceContent info={metaInfo}/>
                }
                {
                    metaInfo?.type === 'training' && <Courses info={metaInfo}/>
                }
            </>
        );
    } else {
        return <Preloader/>
    }

}

export default ServiceCategory;
