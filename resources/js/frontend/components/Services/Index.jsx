import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllServices} from "../../../featurs/Service/ServiceSlice.js";
import {uid, useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";

function Index(props) {
    const {
        isLoading,
        services,
        parentServices,
        errorMess,
        metaInfo
    } = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllServices());
    }, [dispatch]);

    return (
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
        <div className="container">
            <div className="sec-title2 text-center mb-45">
                <span className="sub-text gold-color">Services</span>
                <h2 className="title title2">
                    Explore Our All Services We Offer to customers
                </h2>
            </div>
            <div className="row">
                {isLoading && ""}
                {services && services.map(item => {
                    return (
                        <>
                            <div className="col-lg-4 col-md-6 mb-30" key={uid()}>
                        <div className="services-item pink-light-bg">
                        <div className="services-icon">
                        <div className="image-part">
                        <img className="main-img" src={useInternalLink(item?.image_link)} alt={item?.title}/>
                        <img className="hover-img" src={useInternalLink(item?.image_link)} alt={item?.title}/>
                        </div>
                        </div>
                        <div className="services-content">
                        <div className="services-text">
                        <h3 className="title"><Link to={`service/${item?.slug}/details`}>{item?.title}</Link></h3>
                        </div>
                        <div className="services-desc">
                        <p dangerouslySetInnerHTML={{__html: item?.brief}}>
                        </p>
                        </div>
                        <div className="services-button"><Link
                            to={`service/${item?.slug}/details`}>Read More</Link></div>
                        </div>
                        </div>
                            </div>
                        </>
                    )
                })
                }
                </div>
        </div>
        </div>
    );
}

export default Index;