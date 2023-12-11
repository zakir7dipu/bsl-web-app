import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GrFormAdd} from "react-icons/gr";
import {infoMessage, warningMessage} from "../../../../../lib/helper.js";
import {
    createEventUser,
    deleteEventUser,
    fetchAllEventUsers,
    updateEventUser
} from "../../../../../featurs/WorkshopUsers/WorkshopUsersSlice.js";
import {showWorkshopSeminarById} from "../../../../../featurs/WorkshopSeminar/WorkshopSlice.js";
import HeaderMeta from "../../../../../ui/HeaderMeta.jsx";

import RowDropDown from "../../../../../ui/RowDropDown.jsx";
import BizAlert from "../../../../../lib/BizAlert.js";
import VirtualDataTable from "../../../../../ui/VertualDataTable/index.jsx";
import Preloader from "../../../../../frontend/components/Preloader/index.jsx";
import BizModal from "../../../../../ui/BizzModal.jsx";
import Breadcrumb from "../../../../../backend/components/Breadcrumb/Index.jsx";


function Index(props) {
    const {id} = useParams();
    const {isLoading, eventsUsers} = useSelector((state) => state.WorkshopUsersReducer);
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
            name: "Config",
            url: `/bsl/admin/workshops/config/${id}`
        },
        {
            name: "Registered Users",
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
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
            sortableKey: "name",
            searchableKey: 'name',
        },
        {
            name: 'Email',
            selector: row => row?.email,
            sortable: true,
            sortableKey: "email",
            searchableKey: 'email',
        },
        {
            name: 'Phone',
            selector: row => row?.phone,
            sortable: true,
            sortableKey: "phone",
            searchableKey: 'phone',
        },
        {
            name: 'Designation',
            selector: row => row?.designation,
            sortable: true,
            sortableKey: "designation",
            searchableKey: 'designation',
        },
        {
            name: 'Linkedin',
            selector: row => row?.linkedin,
            sortable: true,
            sortableKey: "linkedin",
            searchableKey: 'linkedin',
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelUsersEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteUserHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState("Add New User");

    const [selectedId, setSelectedId] = useState("");

    const [cName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [designation, setDesignation] = useState("");
    const [linkedin, setLinkedIn] = useState("");

    const [cWorkshopId, setWorkshopId] = useState("");


    const requestHandler = (e) => {
        e.preventDefault();

        let formData = new FormData();
        if (!cName) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", cName);
        }

        if (!email) {
            warningMessage("Email is required.")
        } else {
            formData.append("email", email);
        }

        if (!phone) {
            warningMessage("Phone is required.")
        } else {
            formData.append("phone", phone);
        }

        if (!designation) {
            warningMessage("Designation is required.")
        } else {
            formData.append("designation", designation);
        }

        if (linkedin) {
            formData.append("linkedin", linkedin);
        }

        formData.append("workshop_seminar_id", id);

        if (cName && email && phone && designation) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createEventUser(formData))
            } else {
                let data = {
                    dataset: formData,
                    item: selectedId
                }
                dispatch(updateEventUser(data))
            }
        }
        handleModalClose()
    }

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const resetHandler = () => {
        setName('');
        setEmail('');
        setPhone('');
        setDesignation('');
        setLinkedIn('');
    }

    const handelUsersEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedId(id)
        let dayMeta = eventsUsers.filter((user) => user.id === id)
        dayMeta = dayMeta[0]
        setTitle(`Edit ${dayMeta?.name}`)

        setName(dayMeta?.name || '')
        setEmail(dayMeta?.email || '')
        setPhone(dayMeta?.phone || '')
        setDesignation(dayMeta?.designation || '')
        setLinkedIn(dayMeta?.linkedin || '')

        setWorkshopId(dayMeta.workshop_seminar_id)

        setIsShow(!isShow);
        setIsEdit(!isEdit);
    }

    const deleteUserHandler = async (id) => {
        setSelectedId(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                item: id
            }
            dispatch(deleteEventUser(data))
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
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchAllEventUsers(id));
    }, [dispatch, id])

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Workshop Event Users"
                    url=""
                />
                <Breadcrumb list={breadcrumb}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Registered Users Lists</h4>
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
                                        name="Registered Data"
                                        columns={columns}
                                        data={eventsUsers}
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
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6 form-group">
                                <input
                                    className={`form-control`}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={cName}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}/>
                            </div>
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input
                                    className={`form-control`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/>
                            </div>
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input
                                    className={`form-control`}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}/>
                            </div>
                            <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                <input
                                    className={`form-control`}
                                    type="text"
                                    id="designation"
                                    name="designation"
                                    placeholder="Your Designation"
                                    value={designation}
                                    onChange={(e) => {
                                        setDesignation(e.target.value)
                                    }}/>
                            </div>

                            <div className="col-lg-12 mb-30">
                                <textarea
                                    className={`form-control`}
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="Your Linkedin profile link here"
                                    value={linkedin}
                                    onChange={(e) => {
                                        setLinkedIn(e.target.value)
                                    }}/>
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
