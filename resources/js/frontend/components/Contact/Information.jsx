import React from 'react';
import {Link} from "react-router-dom";

function Information({contact}) {
    return (
        <div className="col-lg-4 md-mb-60">
            <div className="contact-box">
                <div className="sec-title mb-45">
                    <span className="sub-text new-text white-color">{contact?.sub_text}</span>
                    <h2 className="title white-color" style={{float: "none"}}>{contact?.title}</h2>
                </div>
                <div className="address-box mb-25">
                    <div className="address-icon">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="address-text">
                        <span className="label">Email:</span>
                        <Link to={`mailto:${contact?.mail}`}>{contact?.mail}</Link>
                    </div>
                </div>
                <div className="address-box mb-25">
                    <div className="address-icon">
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className="address-text">
                        <span className="label">Phone:</span>
                        <Link to={`tel:${contact?.phone}`}>{contact?.phone}</Link>
                    </div>
                </div>
                <div className="address-box">
                    <div className="address-icon">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="address-text">
                        <span className="label">Address:</span>
                        <div className="desc">{contact?.address}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
