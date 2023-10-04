import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {errorMessage, infoMessage, ucFirst, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {
    createManagementData,
    deleteManagementData,
    fetchAllManagements,
    updateManagementData
} from "../../../featurs/Management/ManagementSlice.js";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import DataTableComponent from "../../../ui/DataTableComponent.jsx";
import Preloader from "../../../backend/components/Preloader";
import BizModal from "../../../ui/BizzModal.jsx";
import FileInput from "../../components/inputFile/Index.jsx";
import {MdStar} from "react-icons/md";

function Index(props) {
    const {
        isLoading,
        managements,
        errorMess
    } = useSelector((state) => state.managementReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Management",
            url: null
        }
    ];

    const columns = [
        {
            name: 'SL',
            cell: (row, index) => index + 1,
            sortable: false,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => ucFirst(row.type),
            sortable: true,
        },
        {
            name: 'Designation',
            selector: row => ucFirst(row.designation),
            sortable: true,
        },
        {
            name: 'Company',
            selector: row => ucFirst(row.company),
            sortable: true,
        },
        {
            name: 'Image',
            cell: row => (
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.avatar)}/>
            )
        },
        {
            name: 'Actions',
            cell: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelEdit(row?.slug)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteHandler(row?.slug)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Management");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedMan, setSelectedMan] = useState("");
    const [index_of, setIndexOf] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [company, setCompany] = useState("");
    const [headshot, setHeadshot] = useState("");
    const [biography, setBiography] = useState("");
    const [about, setAbout] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [facebook, setFacebook] = useState("");
    const [website, setWebsite] = useState("");
    const [youtube, setYoutube] = useState("");
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
        setName('');
        setIndexOf("");
        setType("");
        setDesignation("");
        setCompany("");
        setHeadshot("");
        setBiography("");
        setAbout("");
        setLinkedin("");
        setFacebook("");
        setWebsite("");
        setYoutube("");
        setTwitter("");
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

        if (!index_of) {
            warningMessage("Index is required.")
        } else {
            formData.append("index_of", index_of);
        }

        if (!type) {
            warningMessage("Type is required.")
        } else {
            formData.append("type", type);
        }

        if (!designation) {
            warningMessage("Designation is required.")
        } else {
            formData.append("designation", designation);
        }

        if (company) {
            formData.append("company", company);
        }
        if (headshot) {
            formData.append("headshot", headshot);
        }
        if (biography) {
            formData.append("biography", biography);
        }
        if (about) {
            formData.append("about", about);
        }
        if (linkedin) {
            formData.append("linkedin", linkedin);
        }
        if (facebook) {
            formData.append("facebook", facebook);
        }
        if (website) {
            formData.append("website", website);
        }
        if (youtube) {
            formData.append("youtube", youtube);
        }
        if (twitter) {
            formData.append("twitter", twitter);
        }

        if (avatar) {
            formData.append("avatar", avatar);
        }

        if (name && index_of && type && designation) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createManagementData(formData))
            } else {
                let data = {
                    dataset: formData,
                    slug: selectedMan
                }
                dispatch(updateManagementData(data))
            }
        }
        handleModalClose()
    }

    const handelEdit = (slug) => {
        getMeta(slug)
    }

    const getMeta = (slug) => {
        setSelectedMan(slug)
        let modal = managements.filter((management) => management.slug === slug)
        modal = modal[0]
        setTitle(`Edit ${modal?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(modal?.name);
        setIndexOf(modal?.index_of);
        setType(modal?.type);
        setDesignation(modal?.designation);
        setCompany(modal?.company);
        setHeadshot(modal?.headshot);
        setBiography(modal?.biography);
        setAbout(modal?.about);
        setLinkedin(modal?.linkedin);
        setFacebook(modal?.facebook);
        setWebsite(modal?.website);
        setYoutube(modal?.youtube);
        setTwitter(modal?.twitter);
        setImageFile(modal?.avatar);
    }

    const deleteHandler = async (slug) => {
        setSelectedMan(slug)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                slug: slug
            }
            dispatch(deleteManagementData(data))
        }
    }


    useEffect(() => {
        dispatch(fetchAllManagements());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Managements"
                    url="/bsl/admin/management"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Management Lists</h4>
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New Management')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New Management
                                    </button>
                                </div>
                                <div className="card-body">
                                    <DataTableComponent
                                        columns={columns}
                                        data={managements}
                                        isLoading={isLoading}
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
                                    <label>Short Order <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={index_of}
                                           onChange={(e) => {
                                               setIndexOf(e.target.value)
                                           }} placeholder="Short order" type="number"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Type <sup className="text-danger"><MdStar/></sup></label>
                                    <select className="form-control" name="type" onChange={(e) => {
                                        setType(e.target.value)
                                    }} value={type}>
                                        <option value={null}>--Select One--</option>
                                        <option value="management">Management</option>
                                        <option value="hod">Hod</option>
                                    </select>
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
                                    <label>Company</label>
                                    <input className="form-control" value={company}
                                           onChange={(e) => {
                                               setCompany(e.target.value)
                                           }} placeholder="Enter company" type="text"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Headshot</label>
                                    <input className="form-control" value={headshot}
                                           onChange={(e) => {
                                               setHeadshot(e.target.value)
                                           }} placeholder="Enter headshot" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Biography</label>
                                    <textarea
                                        className="form-control"
                                        name="textarea"
                                        id="textarea" cols="30"
                                        rows="3"
                                        placeholder="Biography"
                                        value={biography}
                                        onChange={e => setBiography(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>About</label>
                                    <textarea
                                        className="form-control"
                                        name="textarea"
                                        id="textarea" cols="30"
                                        rows="3"
                                        placeholder="About"
                                        value={about}
                                        onChange={e => setAbout(e.target.value)}
                                    />
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
                                    <label>Facebook</label>
                                    <input className="form-control" value={facebook}
                                           onChange={(e) => {
                                               setFacebook(e.target.value)
                                           }} placeholder="Enter facebook" type="text"/>
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
                                    <label>Youtube</label>
                                    <input className="form-control" value={youtube}
                                           onChange={(e) => {
                                               setYoutube(e.target.value)
                                           }} placeholder="Enter youtube" type="text"/>
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
