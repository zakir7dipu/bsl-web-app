import React, {useEffect} from 'react';
import {MdStar} from "react-icons/md";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllHosts} from "@/featurs/Hosts/HostSlice.js";
import {uid} from "@/lib/helper.js";

function SessionDetails(props) {
    const {
        isLoading,
        hosts,
    } = useSelector((state) => state.hostReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllHosts());
    }, [dispatch]);

    return (
        <>
            <Row>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Title<sup
                            className="text-danger"><MdStar/></sup></label>
                        <input type="text" className={`form-control`} id="name"
                               placeholder="Enter name"
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Select Host <sup
                            className="text-danger"><MdStar/></sup></label>

                        <select className="form-control" name="type">
                            <option value={null}>--Select One--</option>
                            {!isLoading && hosts.map(host =>{
                                return <option value={host?.id} key={uid()}>{host?.name}</option>;
                            })}

                        </select>
                    </div>
                </div>
                <Col lg={2}>
                    <div className="form-group">
                        <label htmlFor="form_date">Start At </label>
                        <input type="time" id="form_date" placeholder="Enter date"
                               className="form-control"
                        />
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="form-group">
                        <label htmlFor="to_date">End At </label>
                        <input type="time" id="to_date" placeholder="Enter date"
                               className="form-control"
                        />
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="form-group">
                        <button type="btn" style={{marginTop:'40px'}} className="btn btn-success btn-sm"><i className="fa fa-plus-square"></i></button>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default SessionDetails;
