import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "@/lib/BizAlert.js";
import RowDropDown from "@/ui/RowDropDown.jsx";
import {infoMessage, warningMessage} from "@/lib/helper.js";
import {
    createWorkshopDays,
    deleteWorkshopDays,
    fetchAllWorkshopDays,
    updateWorkshopDays
} from "@/featurs/WorkshopDays/WorkshopDaysSlice.js";
import {showWorkshopSeminarById} from "@/featurs/WorkshopSeminar/WorkshopSlice.js";
import Preloader from "@/backend/components/Preloader/Index.jsx";
import HeaderMeta from "@/ui/HeaderMeta.jsx";
import Breadcrumb from "@/backend/components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import VirtualDataTable from "@/ui/VertualDataTable/index.jsx";
import {MdStar} from "react-icons/md";
import BizModal from "@/ui/BizzModal.jsx";

function Index(props) {
    const {id} = useParams();
    const {isLoading, workshopdays} = useSelector((state) => state.workshopDaysReducer);
    const {metaInfo} = useSelector((state) => state.workshopSeminarReducer);

    const dispatch = useDispatch();
    const bizAlert = new BizAlert();
    const [workshopName, setWorkshopName] = useState("");
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: `${workshopName}`,
            url: "/bsl/admin/workshops"
        },
        {
            name: "Days List",
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
            name: 'Date',
            selector: row => row?.date,
            sortable: true,
            sortableKey: "date",
            searchableKey: 'date',
        },
        {
            name: 'Session Add',
            selector: row => (
                <Link to={`sessions/${row?.id}`} className="btn btn-info btn-sm">Add Session</Link>
            ),
            sortable: true,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelDayEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteDayHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState("Add New Workshop/Seminar Days");

    const [selectedId, setSelectedId] = useState("");
    const [cName, setName] = useState("");
    const [cDate, setDate] = useState("");

    const [cWorkshopId, setWorkshopId] = useState("");

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
        if (!cDate) {
            warningMessage("Date is required.")
        } else {
            formData.append("date", cDate);
        }

        formData.append("workshop_seminar_id", id);

        if (cName && cDate) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createWorkshopDays(formData))
            } else {
                let data = {
                    dataset: formData,
                    item: selectedId
                }
                dispatch(updateWorkshopDays(data))
            }
        }
        handleModalClose()
    }

    const resetHandler = () => {
        setName("");
        setDate("");
        setTitle("");
    }

    const handelDayEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedId(id)
        let dayMeta = workshopdays.filter((days) => days.id === id)
        dayMeta = dayMeta[0]
        setTitle(`Edit ${dayMeta.title}`)

        setName(dayMeta?.title || '')
        setDate(dayMeta?.date || '')
        setWorkshopId(dayMeta.workshop_seminar_id)

        setIsShow(!isShow);
        setIsEdit(!isEdit);
    }


    const deleteDayHandler = async (id) => {
        setSelectedId(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                item: id
            }
            dispatch(deleteWorkshopDays(data))
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setWorkshopName(metaInfo?.name || "");
            }, 500)
        }
    }, [isLoading])

    useEffect(() => {
        dispatch(showWorkshopSeminarById(id));
    }, [dispatch,id])

    useEffect(() => {
        dispatch(fetchAllWorkshopDays(id));
    }, [dispatch, id])

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Workshop Days List"
                    url=""
                />
                <Breadcrumb list={breadcrumb}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Workshop Days Lists</h4>
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
                                        name="Curriculam Data"
                                        columns={columns}
                                        data={workshopdays}
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
                        <div className="row">

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Title <sup className="text-danger"><MdStar/></sup></label>
                                    <input
                                        type={`text`}
                                        className={`form-control`}
                                        value={cName}
                                        onChange={e => setName(e.target.value)}
                                        placeholder={`Title`}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Date <sup className="text-danger"><MdStar/></sup></label>
                                    <input
                                        type={`date`}
                                        className={`form-control`}
                                        value={cDate}
                                        onChange={e => setDate(e.target.value)}
                                        placeholder={`Date`}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12 card-footer">
                                <button className="btn btn-primary px-3 float-right"
                                        type={"submit"}>Save
                                </button>
                            </div>
                        </div>
                    </form>
                </BizModal>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
