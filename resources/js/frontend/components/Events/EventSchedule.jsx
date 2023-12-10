import React from 'react';
import {Link} from "react-router-dom";

function EventSchedule({eventSchedule}) {
    console.log(eventSchedule)
    return (
        <section id="schedule" className="section-with-bg pb-20">
            <div className="container wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <div className="section-header">
                    <h2>Event Schedule</h2>
                    <p>Here is our event schedule</p>
                </div>

                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link active show" href="#day-2" role="tab" data-toggle="tab"
                              aria-selected="true">
                            Business Track

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#day-3" role="tab" data-toggle="tab" aria-selected="false">
                            Career Track

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#day-1" role="tab" data-toggle="tab" aria-selected="false">
                            Technical Track

                        </Link>
                    </li>
                </ul>

                <h3 className="sub-heading">Join us on June 17, 2023 at AWS Cloud Day Bangladesh 2023! This full day
                    event will feature hands-on workshops on building cloud native applications and machine
                    learning</h3>

                <div className="tab-content row justify-content-center">
                    <div role="tabpanel" className="col-lg-9 tab-pane fade active show" id="day-2">
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>07:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Registration, Networking, Breakfast <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>07:30 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>AWS Cloud Community in Bangladesh <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>Professional Career Journey by AWS Certified cloud experts</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>09:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Registration, Networking and Tea/Coffee <span>AWS Cloud Day Bangladesh</span>
                                </h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Opening Ceremony <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 90 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>11:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>Power Panel: <span>Coming Soon..</span></h4>
                                <p>Startups: Innovate and Disrupt with Cloud</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>01:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Lunch, Prayer Break, and Networking <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>One Hour</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>02:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>AWS Programs and Benefits for Organizations <span>Coming Soon..</span></h4>
                                <p>One Hour</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>03:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>AWS Partnership Opportunities <span>Coming Soon..</span></h4>
                                <p>WWPS and WWCS - APN and Marketplace</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>04:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Tea, Prayer Break and Networking <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>04:30 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Closing Ceremony <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 90 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>06:30 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Bar-B-Q Dinner at Rooftop <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 2 Hours</p>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" className="col-lg-9 tab-pane fade" id="day-3">
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>07:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Registration, Networking, Breakfast <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>07:30 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>AWS Cloud Community in Bangladesh <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>Professional Career Journey by AWS Certified cloud experts</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>09:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Registration, Networking and Tea/Coffee <span>AWS Cloud Day Bangladesh</span>
                                </h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Opening Ceremony <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 90 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>11:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>Skill Development for Advanced Technology <span>Coming Soon..</span></h4>
                                <p>Goal for Smart Bangladesh</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>12:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>AWS Training and Certification <span>Coming Soon..</span></h4>
                                <p>Machine Learning University, and Skill Development</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>01:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Lunch, Prayer Break, and Networking <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>One Hour</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>02:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>AWS Student Programs <span>Coming Soon..</span></h4>
                                <p>Cloud Clubs, Academy, Community Heroes, Scouts, MLU</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>03:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/75/64637ff7785c8_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="Coming Soon.."/>
                                </div>
                                <h4>Cloud Practitioner &amp; Solutions Architect Exam <span>Coming Soon..</span>
                                </h4>
                                <p>One Hour</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>04:00 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Tea, Prayer Break and Networking <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>04:30 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Closing Ceremony <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 90 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>06:30 PM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Bar-B-Q Dinner at Rooftop <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 2 Hours</p>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" className="col-lg-9 tab-pane fade" id="day-1">
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>07:00 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>Registration, Networking, Breakfast <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>- 30 Minutes</p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>07:30 AM</time>
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img
                                        src="https://aws.dipti.com.bd/storage/74/64637fd7de257_AWS-Cloud-Day-Bangladesh.jpg"
                                        alt="AWS Cloud Day Bangladesh"/>
                                </div>
                                <h4>AWS Cloud Community in Bangladesh <span>AWS Cloud Day Bangladesh</span></h4>
                                <p>Professional Career Journey by AWS Certified cloud experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventSchedule;
