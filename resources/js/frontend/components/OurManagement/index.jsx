import React from 'react';
import {useInternalLink} from "../../../lib/helper.js";
import {Link} from "react-router-dom";
import backImage from "../../../../frontend-assets/images/team/ngbng.png";

function Index({management, handleManagement}) {
    const {name, designation, company, linkedin, facebook, website, youtube, twitter, slug, avatar} = management;
    return (
        <div className="col-lg-4 col-md-6 mb-50">
            <div className="team-item-wrap">
                <div className="team-wrap" style={{backgroundImage: `url('${backImage}')`}}>
                    <div className="image-inner">
                        <Link to="#" onClick={(e) => handleManagement(slug)}>
                            <img src={useInternalLink(avatar)} alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="team-content text-center">
                    <h4 className="person-name"><Link to="#">{name}</Link></h4>
                    <span className="designation">{designation}</span>
                    {/*<ul className="team-social">*/}
                    {/*    <li><Link to={linkedin}><i className="fa fa-linkedin"></i></Link></li>*/}
                    {/*    <li><Link to={facebook}><i className="fa fa-facebook"></i></Link></li>*/}
                    {/*    <li><Link to={twitter}><i className="fa fa-twitter"></i></Link></li>*/}
                    {/*    <li><Link to={website}><i className="fa fa-globe"></i></Link></li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    );
}

export default Index;