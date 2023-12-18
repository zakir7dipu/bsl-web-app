import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {infoMessage, ucFirst, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import Preloader from "../../../backend/components/Preloader";
import BizModal from "../../../ui/BizzModal.jsx";
import FileInput from "../../components/inputFile/Index.jsx";
import {MdStar} from "react-icons/md";
import {createTeamData, deleteTeamData, fetchAllTeams, updateTeamData} from "../../../featurs/Teams/TeamSlice.js";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading,
        teams,
        errorMess
    } = useSelector((state) => state.teamReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Teams",
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
            name: 'Designation',
            selector: row => ucFirst(row.designation),
            sortable: true,
            sortableKey: "designation",
            searchableKey: 'designation',
        },
        {
            name: 'Index Of',
            selector: row => row.index_of,
            sortable: true,
            sortableKey: "index_of",
            searchableKey: 'index_of',
        },
        {
            name: 'Image',
            selector: row => (
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.avatar)}/>
            ),
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelTeamEdit(row?.slug)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteTeamHandler(row?.slug)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false,
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Management");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedTeam, setSelectedTeam] = useState("");

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [index_of, setIndexOf] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [website, setWebsite] = useState("");
    const [twitter, setTwitter] = useState("");
    const [avatar, setImageFile] = useState("");

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
        setDesignation("");
        setLinkedin("");
        setWebsite("");
        setTwitter("");
        setImageFile("");
        setIndexOf("");
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
        if (!index_of) {
            warningMessage("Index is required.")
        } else {
            formData.append("index_of", index_of);
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
        if (website) {
            formData.append("website", website);
        }
        if (twitter) {
            formData.append("twitter", twitter);
        }

        if (avatar) {
            formData.append("avatar", avatar);
        }

        if (name && email && phone && designation) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createTeamData(formData))
            } else {
                let data = {
                    dataset: formData,
                    slug: selectedTeam
                }
                dispatch(updateTeamData(data))
            }
        }
        handleModalClose()
    }

    const handelTeamEdit = (slug) => {
        getMeta(slug)
    }

    const getMeta = (slug) => {
        setSelectedTeam(slug)
        let modal = teams.filter((team) => team.slug === slug)
        modal = modal[0]
        setTitle(`Edit ${modal?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);
        setIndexOf(modal?.index_of);
        setName(modal?.name);
        setPhone(modal?.phone);
        setDesignation(modal?.designation);
        setEmail(modal?.email);
        setLinkedin(modal?.linkedin);
        setWebsite(modal?.website);
        setTwitter(modal?.twitter);
    }

    const deleteTeamHandler = async (slug) => {
        setSelectedTeam(slug)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                slug: slug
            }
            dispatch(deleteTeamData(data))
        }
    }


    useEffect(() => {
        dispatch(fetchAllTeams());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Teams"
                    url="/bsl/admin/our-teams"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Our Teams
                                        <button className="btn btn-info btn-mini float-right" onClick={() => {
                                            setIsShow(!isShow);
                                            setIsEdit(false)
                                            setTitle('Add New')
                                        }}>
                                            <GrFormAdd/>&nbsp;Add New
                                        </button></h4>
                                </div>
                                <div className="card-body">

                                    <VirtualDataTable
                                        name="Teams Data"
                                        columns={columns}
                                        data={teams}
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
                            <div className="col-md-6">
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


                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Designation <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={designation}
                                           onChange={(e) => {
                                               setDesignation(e.target.value)
                                           }} placeholder="Enter designation" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Short Order <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={index_of}
                                           onChange={(e) => {
                                               setIndexOf(e.target.value)
                                           }} placeholder="Short order" type="number"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Linkedin</label>
                                    <input className="form-control" value={linkedin}
                                           onChange={(e) => {
                                               setLinkedin(e.target.value)
                                           }} placeholder="Enter linkedin" type="text"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Website</label>
                                    <input className="form-control" value={website}
                                           onChange={(e) => {
                                               setWebsite(e.target.value)
                                           }} placeholder="Enter website" type="text"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Twitter</label>
                                    <input className="form-control" value={twitter}
                                           onChange={(e) => {
                                               setTwitter(e.target.value)
                                           }} placeholder="Enter twitter" type="text"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <FileInput
                                        label={"Image"}
                                        file={avatar}
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
