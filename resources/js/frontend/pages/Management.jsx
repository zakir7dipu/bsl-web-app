import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";
import {fetchAllManagements, fetchManagementBySlug} from "../../featurs/Management/ManagementSlice.js";
import OurManagement from "../components/OurManagement";
import {uid, useInternalLink} from "../../lib/helper.js";
import BizModal from "../../ui/BizzModal.jsx";
import {Link} from "react-router-dom";
import backImage from "../../../frontend-assets/images/team/ngbng.png";

function Management() {
    const {isLoading, managements, metaInfo} = useSelector(state => state.managementReducer)
    const dispatch = useDispatch();

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Show");

    useEffect(() => {
        dispatch(fetchAllManagements())
    }, [dispatch])

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Management",
            url: "/management"
        },
    ]

    const handleManagement = (slug) => {
        dispatch(fetchManagementBySlug(slug));
        setTitle(`Show ${metaInfo?.title || ''}`)
        setIsShow(!isShow);
    }
    const handleModalClose = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Management"
                page="Management"
            />
            <Breadcrumbs
                page="Management"
                breadcrumbs={breadcrumbs}
            />
            <div className="rs-team modify1 pt-120 pb-95 md-pt-80 md-pb-75">
                <div className="container">
                    <div className="row">
                        {!isLoading &&
                            managements.map(item =>
                                <OurManagement management={item} key={uid()} handleManagement={handleManagement}/>
                            )
                        }
                    </div>
                </div>
            </div>

            <BizModal isShow={isShow} title={`Details Of ${metaInfo?.name}`} handleClose={handleModalClose}
                      large={'xl'}>
                <div className="card-body">
                    <div className="row team-item-wrap">
                        <div className="col-md-4">
                            <div className="team-item-wrap">
                                <div className="team-wrap" style={{backgroundImage: `url('${backImage}')`}}>
                                    <div className="image-inner">
                                        <img style={{borderRadius: "50%"}}
                                             src={useInternalLink(metaInfo?.avatar)} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="team-content">
                                <h4 className="person-name"><Link to="#">{metaInfo?.name}</Link></h4>
                                <span className="designation">{metaInfo?.designation}</span>
                                <p dangerouslySetInnerHTML={{__html: metaInfo?.about}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </BizModal>
        </>
    );
}

export default Management;
