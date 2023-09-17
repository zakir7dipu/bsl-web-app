import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchClientBySlug} from "../../featurs/Pages/PageSlice.js";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";
import {useInternalLink} from "../../lib/helper.js";

function Page() {
    const {slug} = useParams();
    const {
        isLoading,
        metaInfo
    } = useSelector((state) => state.pagesReducer);

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

    //console.log(metaInfo)

    useEffect(() => {
        dispatch(fetchClientBySlug(slug));
    }, [slug]);

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

                <div className="rs-case-studies-single pt-120 pb-120 md-pt-80 md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 md-mb-50">
                                <div className="services-img">
                                    <img src={useInternalLink(metaInfo?.image_link)} alt="" style={{maxHeight:'500px',width:"100%"}}/>
                                </div>

                                <h2 className="mt-34">{metaInfo?.title}</h2>

                                <p dangerouslySetInnerHTML={{__html: metaInfo?.description}}/>
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

export default Page;
