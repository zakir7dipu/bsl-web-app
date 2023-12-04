import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../../lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../../lib/helper.js";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {createHostData, deleteHostData, fetchAllHosts, updateHostData} from "../../../../featurs/Hosts/HostSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import VirtualDataTable from "../../../../ui/VertualDataTable/index.jsx";
import BizModal from "../../../../ui/BizzModal.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../../components/inputFile/Index.jsx";
import Preloader from "../../../components/Preloader/Index.jsx";

function Index(props) {

    const {isLoading, hosts, errorMess} = useSelector((state) => state.hostReducer);

    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Hosts",
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
            selector: row => row.name,
            sortable: true,
            sortableKey: "name",
            searchableKey: 'name',
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            sortableKey: "email",
            searchableKey: 'email',
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
            sortableKey: "phone",
            searchableKey: 'phone',
        },
        {
            name: 'Thumbnail',
            selector: row => (
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.thumbnail)}/>
            ),
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelHostEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteHostHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false,
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Hosts");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedHost, setSelectedHost] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [qualification, setQualification] = useState("");
    const [thumbnail, setImageFile] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const resetHandler = () => {
        setName("");
        setPhone("");
        setEmail("");
        setAbout("");
        setQualification("");
        setImageFile("");
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", name);
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

        if (about) {
            formData.append("about", about);
        }

        if (qualification) {
            formData.append("qualification", qualification);
        }

        if (thumbnail) {
            formData.append("thumbnail", thumbnail);
        }

        if (name && email && phone) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createHostData(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedHost
                }
                dispatch(updateHostData(data))
            }
        }
        handleModalClose()
    }

    const handelHostEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedHost(id)
        let modal = hosts.filter((host) => host.id === id)
        modal = modal[0]
        setTitle(`Edit ${modal?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(modal?.name);
        setPhone(modal?.phone);
        setEmail(modal?.email);
        setAbout(modal?.about);
        setQualification(modal?.qualification);
    }

    const deleteHostHandler = async (id) => {
        setSelectedHost(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteHostData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllHosts());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Hosts"
                    url="/bsl/admin/hosts"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Our Host
                                        <button className="btn btn-info btn-mini float-right" onClick={() => {
                                            setIsShow(!isShow);
                                            setIsEdit(false)
                                            setTitle('Add New')
                                        }}>
                                            <GrFormAdd/>&nbsp;Add New
                                        </button>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <VirtualDataTable
                                        name="Hosts Data"
                                        columns={columns}
                                        data={hosts}
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
                                    <label>Name <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={name}
                                           onChange={(e) => {
                                               setName(e.target.value)
                                           }} placeholder="Name" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Phone <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={phone}
                                           onChange={(e) => {
                                               setPhone(e.target.value)
                                           }} placeholder="Phone" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={email}
                                           onChange={(e) => {
                                               setEmail(e.target.value)
                                           }} placeholder="Email" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>About </label>
                                    <textarea className="form-control" value={about}
                                              onChange={(e) => {
                                                  setAbout(e.target.value)
                                              }} placeholder="Enter host about"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Qualification </label>
                                    <textarea className="form-control" value={qualification}
                                              onChange={(e) => {
                                                  setQualification(e.target.value)
                                              }} placeholder="Enter host qualification"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <FileInput
                                        label={"Thumbnail"}
                                        file={thumbnail}
                                        id={"imageFile"}
                                        handler={inputFileHandler}
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="col-md-12 mt-3">
                                <button className="btn btn-primary px-3 float-right" type={"submit"}>Save</button>
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
