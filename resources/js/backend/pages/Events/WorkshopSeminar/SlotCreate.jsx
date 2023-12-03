import React, {useEffect, useState} from 'react';
import {MdStar} from "react-icons/md";
import {Button, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllHosts} from "@/featurs/Hosts/HostSlice.js";
import {uid} from "../../../../lib/helper.js";

function SlotCreate(props) {
    const {
        isLoading,
        hosts,
    } = useSelector((state) => state.hostReducer);
    const dispatch = useDispatch();
    const [dayTitle, setDayTitle] = useState("")

    useEffect(() => {
        dispatch(fetchAllHosts());
    }, [dispatch]);

    return (
        <>
            <Col>
                <div className="form-group">
                    <label>Title<sup
                        className="text-danger"><MdStar/></sup></label>
                    <input
                        type="text"
                        className={`form-control`} id="name"
                        placeholder="Enter name"
                        value={dayTitle}
                        onChange={e => setDayTitle(e.target.value)}
                    />
                </div>
            </Col>
            <Col>
                <div className="form-group">
                    <label>Select Host <sup
                        className="text-danger"><MdStar/></sup></label>

                    <select className="form-control" name="type">
                        <option value={null}>--Select One--</option>
                        {!isLoading && hosts.map(host => {
                            return <option value={host?.id} key={uid()}>{host?.name}</option>;
                        })}

                    </select>
                </div>
            </Col>
            <Col>
                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label htmlFor="form_date">Start At </label>
                            <input type="time" id="form_date" placeholder="Enter date"
                                   className="form-control"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label htmlFor="to_date">End At </label>
                            <input type="time" id="to_date" placeholder="Enter date"
                                   className="form-control"
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default SlotCreate;
