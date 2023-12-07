import {videoModuleAction} from "@/featurs/NavAction/NavSlice.js";
import moment from "moment";

import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import bannerImg from "../../../../frontend-assets/images/banner/intro-bg.jpg";
import Style from "../../pages/Event.module.css"

function EventHero({metaInfo}) {
    const dispatch = useDispatch();
    const handelVideoAction = (e) => {
        e.preventDefault()
        dispatch(videoModuleAction(metaInfo?.promo_video))
    }

    return (
        <div className={`rs-banner style10 ${Style.intro}`}
             style={{background: `url('${bannerImg}')`}}>
            <div className={Style.introOverflow}>
                <div className={`container ${Style.introContainer}`}>
                    <div className="banner-content text-center">
                        <span className="subtitle"><span>{moment(metaInfo?.form_date).format("LL")}</span></span>
                        <h2 className="title" style={{float: 'none'}}>{metaInfo?.name}</h2>

                        {metaInfo?.promo_video && <div className={`rs-videos`}>
                            <div className="animate-border white-color style3">
                                <Link className={`popup-border popup-videos ${Style.introVideoButton}`}
                                      to={metaInfo?.promo_video} onClick={handelVideoAction}>
                                    <i className="fa fa-play"></i>
                                </Link>
                            </div>
                        </div>
                        }
                        <h6 className="subtitle" style={{float:'none'}}>Organize By <span>{metaInfo?.sponsors}</span></h6>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventHero;
