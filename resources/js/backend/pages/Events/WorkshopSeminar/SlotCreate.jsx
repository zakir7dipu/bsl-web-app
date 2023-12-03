import React, {useEffect} from 'react';
import {MdStar} from "react-icons/md";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllHosts} from "@/featurs/Hosts/HostSlice.js";
import {uid} from "../../../../lib/helper.js";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

function SlotCreate({dayTitle,setDayTitle,slotHost,setSlotHost,slotStart,setSlotStart,slotEnd,setEndStart,slotTopic,setSlotTopic}) {
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

                    <select className="form-control" name="type" value={slotHost}
                            onChange={e => setSlotHost(e.target.value)}>
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
                            <label htmlFor="form_time">Start At </label>
                            <input type="time" id="form_time" placeholder="Enter date"
                                   className="form-control"
                                   value={slotStart}
                                   onChange={e => setSlotStart(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label htmlFor="to_date">End At </label>
                            <input type="time" id="to_date" placeholder="Enter date"
                                   className="form-control"
                                   value={slotEnd}
                                   onChange={e => setEndStart(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="form-group">
                            <label htmlFor="to_date">Topic</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={slotTopic}
                                id="topics"
                                onChange={(e, editor) => {
                                    const data = editor.getData();
                                    setSlotTopic(data)
                                }}

                            />

                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default SlotCreate;
