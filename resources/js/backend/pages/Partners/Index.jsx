import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import Preloader from "../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import {MdStar} from "react-icons/md";
import FileInput from "../../components/inputFile/Index.jsx";
import BizModal from "../../../ui/BizzModal.jsx";
import {
    createPartnerData,
    deletePartnerData,
    fetchAllPartners,
    updatePartnerData
} from "../../../featurs/Partner/PartnerSlice.js";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading, partners, errorMess
    } = useSelector((state) => state.partnerReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Partners", url: null
    }];

    const columns = [{
        name: 'SL', selector: (row, index) => index + 1, sortable: false,
    }, {
        name: 'Name', selector: row => row?.name, sortable: true, sortableKey: "name", searchableKey: 'name',
    }, {
        name: 'Description',
        selector: row => row?.description,
        sortable: true,
        sortableKey: "description",
        searchableKey: 'description',
    }, {
        name: 'Image',
        selector: row => (<img style={{height: "60px", width: "60px"}} src={useInternalLink(row.image_link)}/>),
        sortable: false
    }, {
        name: 'Actions', selector: (row) => (<RowDropDown>
            <Link to="#" onClick={(e) => handelPartnerEdit(row?.id)} className="dropdown-item">Edit</Link>
            <Link to="#" onClick={(e) => deletePartnerHandler(row?.id)}
                  className="dropdown-item">Delete</Link>
        </RowDropDown>), sortable: false
    },];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Partner");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedPartner, setSelectedPartner] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [index_of, setIndex] = useState("");
    const [image_link, setImageFile] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const resetHandler = () => {
        setName("");
        setDescription("");
        setIndex("");
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
            warningMessage("Indexing is required.")
        } else {
            formData.append("index_of", index_of);
        }

        if (description) {
            formData.append("description", description);
        }

        if (!isEdit) {
            if (!image_link) {
                warningMessage("Image is required.")
            } else {
                formData.append("image_link", image_link);
            }
        } else {
            if (image_link) {
                formData.append("image_link", image_link);
            }
        }

        if (name && index_of) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createPartnerData(formData))
            } else {
                let data = {
                    dataset: formData, id: selectedPartner
                }
                dispatch(updatePartnerData(data))
            }
        }
        handleModalClose()
    }

    const handelPartnerEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedPartner(id)
        let modal = partners.filter((partner) => partner.id === id)
        modal = modal[0]
        setTitle(`Edit ${modal?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(modal?.name || '');
        setDescription(modal?.description || '');
        setIndex(modal?.index_of || '');
    }

    const deletePartnerHandler = async (id) => {
        setSelectedPartner(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                client: id
            }
            dispatch(deletePartnerData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllPartners());
    }, [dispatch]);

    if (!isLoading) {
        return (<>
            <HeaderMeta
                title="Clients"
                url="/bsl/admin/partner"
            />
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Partner Lists
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
                                    name="Partners Data"
                                    columns={columns}
                                    data={partners}
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
                                <label>Indexing <sup className="text-danger"><MdStar/></sup></label>
                                <input className="form-control" value={index_of}
                                       onChange={(e) => {
                                           setIndex(e.target.value)
                                       }} placeholder="Indexing" type="number"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    name="textarea"
                                    id="textarea" cols="30"
                                    rows="3"
                                    placeholder="Description"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <FileInput
                                    label={"Image"}
                                    file={image_link}
                                    id={"imageFile"}
                                    handler={inputFileHandler}
                                    required="required"
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
        </>);
    } else {
        return <Preloader/>
    }
}

export default Index;
