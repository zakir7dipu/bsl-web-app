import {fetchAllHosts} from "@/featurs/Hosts/HostSlice.js";
import {fetchWorkshopDaysById} from "@/featurs/WorkshopDays/WorkshopDaysSlice.js";
import {
    createSessions,
    deleteSessions,
    fetchAllSessions,
    updateSessions
} from "@/featurs/WorkshopSessions/WorkshopSessionsSlice.js";
import Preloader from "@/frontend/components/Preloader/index.jsx";
import BizAlert from "@/lib/BizAlert.js";
import {infoMessage, toStringTime, uid, warningMessage} from "@/lib/helper.js";
import BizModal from "@/ui/BizzModal.jsx";
import HeaderMeta from "@/ui/HeaderMeta.jsx";
import RowDropDown from "@/ui/RowDropDown.jsx";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {GrFormAdd} from "react-icons/gr";
import {MdStar} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import VirtualDataTable from "../../../../../../ui/VertualDataTable/index.jsx";
import Breadcrumb from "../../../../../components/Breadcrumb/Index.jsx";

function Index(props) {

    const {id} = useParams();

    const {isLoading, sessions} = useSelector((state) => state.workshopSessionsReducer);
    const {metaInfo} = useSelector((state) => state.workshopDaysReducer);
    const {
        hosts,
    } = useSelector((state) => state.hostReducer);

    const dispatch = useDispatch();
    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: `${metaInfo?.workshop_seminar?.name}`,
            url: "/bsl/admin/workshops"
        },
        {
            name: `${metaInfo?.title}`,
            url: `/bsl/admin/workshops/config/${metaInfo?.workshop_seminar_id}/days/${metaInfo?.workshop_seminar_id}`
        },
        {
            name: "Sessions",
            url: null
        }
    ];

    const columns = [
        {
            name: 'SL',
            selector: (row, index) => index + 1,
            sortable: false,
        },
        {
            name: 'Title',
            selector: row => row?.title,
            sortable: true,
            sortableKey: "title",
            searchableKey: 'title',
        },
        {
            name: 'Start Time',
            selector: row => toStringTime(row?.from),
            sortable: true,
            sortableKey: "from",
            searchableKey: 'from',
        },
        {
            name: 'End Time',
            selector: row => toStringTime(row?.to),
            sortable: true,
            sortableKey: "to",
            searchableKey: 'to',
        },
        {
            name: 'Hosts',
            selector: row => row?.session_hosts && row?.session_hosts?.host?.name,
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelSessionEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteSessionHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];
    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState("Add New Session");

    const [selectedId, setSelectedId] = useState("");
    const [cName, setName] = useState("");
    const [fromTime, setFromTime] = useState("");
    const [toTime, setToTime] = useState("");
    const [topics, setTopics] = useState("");
    const [cHost, setHosts] = useState("");

    const [cWorkshopDayId, setWorkshopDayId] = useState("");


    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!cName) {
            warningMessage("Name is required.")
        } else {
            formData.append("title", cName);
        }
        if (!fromTime) {
            warningMessage("From Time is required.")
        } else {
            formData.append("from", fromTime);
        }

        if (!toTime) {
            warningMessage("From Time is required.")
        } else {
            formData.append("to", toTime);
        }

        if (!topics) {
            warningMessage("Topics is required.")
        } else {
            formData.append("topics", topics);
        }

        if (!cHost) {
            warningMessage("Host is required.")
        } else {
            formData.append("host_id", cHost);
        }

        formData.append("workshop_day_id", id);

        if (cName && fromTime && toTime && topics) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createSessions(formData))
            } else {
                let data = {
                    dataset: formData,
                    item: selectedId
                }
                dispatch(updateSessions(data))
            }
        }
        handleModalClose()
    }

    const resetHandler = () => {
        setTitle("");
        setName("");
        setFromTime("");
        setToTime("");
        setTopics("");
        setHosts("");
    }

    const handelSessionEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedId(id)
        let model = sessions.filter((session) => session.id === id)
        model = model[0]
        setTitle(`Edit ${model.title}`)

        setName(model?.title || '')
        setFromTime(model?.from || '')
        setToTime(model?.to || '')
        setTopics(model?.topics || '')
        setWorkshopDayId(model.workshop_day_id)
        setHosts(model?.session_hosts?.host_id)

        setIsShow(!isShow);
        setIsEdit(!isEdit);
    }

    const deleteSessionHandler = async (id) => {
        setSelectedId(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                item: id
            }
            dispatch(deleteSessions(data))
        }
    }

    // useEffect(() => {
    //     if (!isLoading) {
    //         setTimeout(() => {
    //             setWorkshopName(metaInfo?.name || "");
    //         }, 500)
    //     }
    // }, [isLoading])

    useEffect(() => {
        dispatch(fetchAllHosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchWorkshopDaysById(id));
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchAllSessions(id));
    }, [dispatch, id])


    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Workshop Sessions List"
                    url=""
                />

                <Breadcrumb list={breadcrumb}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Workshop Sessions Lists</h4>
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New
                                    </button>
                                </div>
                                <div className="card-body">
                                    <VirtualDataTable
                                        name="Sessions Data"
                                        columns={columns}
                                        data={sessions}
                                        dataViewRangeArray={[10, 20, 30, 50, 100]}
                                        itemPerPage={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BizModal isShow={isShow} title={title} handleClose={handleModalClose} large={'lg'}>
                    <form className="form-profile" onSubmit={requestHandler}>
                        <Col>
                            <div className="form-group">
                                <label>Title<sup
                                    className="text-danger"><MdStar/></sup></label>
                                <input
                                    type="text"
                                    className={`form-control`} id="name"
                                    placeholder="Enter name"
                                    value={cName}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label>Select Host <sup
                                    className="text-danger"><MdStar/></sup></label>

                                <select className="form-control" name="type" value={cHost}
                                        onChange={e => setHosts(e.target.value)}>
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
                                        <label htmlFor="from">Start At </label>
                                        <input type="time" id="from" placeholder="Enter date"
                                               className="form-control"
                                               value={fromTime}
                                               onChange={e => setFromTime(e.target.value)}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="to">End At </label>
                                        <input type="time" id="to" placeholder="Enter date"
                                               className="form-control"
                                               value={toTime}
                                               onChange={e => setToTime(e.target.value)}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="form-group">
                                        <label htmlFor="topics">Topic</label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={topics}
                                            id="topics"
                                            onChange={(e, editor) => {
                                                const data = editor.getData();
                                                setTopics(data)
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <button className="btn btn-primary px-3 float-right"
                                    type={"submit"}>Save
                            </button>
                        </Col>

                    </form>
                </BizModal>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
