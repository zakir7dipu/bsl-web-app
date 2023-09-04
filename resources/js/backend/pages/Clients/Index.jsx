import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {errorMessage, infoMessage, ucFirst, useInternalLink} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {
    createClientData,
    deleteClientData,
    fetchAllClients,
    updateClientData
} from "../../../featurs/Clients/ClientSlice.js";
import Preloader from "../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import DataTableComponent from "../../../ui/DataTableComponent.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../components/inputFile/Index.jsx";
import BizModal from "../../../ui/BizzModal.jsx";

function Index(props) {
    const {
        isLoading,
        clients,
        errorMess
    } = useSelector((state) => state.clientReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Clients",
            url: null
        }
    ];

    const columns = [
        {
            name: 'SL',
            selector: row => row?.index_of,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row?.description,
            sortable: true,
        },
        {
            name: 'Image',
            cell: row => (
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.image_link)}/>
            )
        },
        {
            name: 'Actions',
            cell: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelClientEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteClientHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Management");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedClient, setSelectedClient] = useState("");

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
            errorMessage("Name is required.")
        } else {
            formData.append("name", name);
        }

        if (!index_of) {
            errorMessage("Indexing is required.")
        } else {
            formData.append("index_of", index_of);
        }

        if (description) {
            formData.append("description", description);
        }

        if (!isEdit) {
            if (!image_link) {
                errorMessage("Image is required.")
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
                dispatch(createClientData(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedClient
                }
                dispatch(updateClientData(data))
            }
        }
        handleModalClose()
    }

    const handelClientEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedClient(id)
        let modal = clients.filter((client) => client.id === id)
        modal = modal[0]
        setTitle(`Edit ${modal?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(modal?.name);
        setDescription(modal?.description);
        setIndex(modal?.index_of);
    }

    const deleteClientHandler = async (id) => {
        setSelectedClient(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                client: id
            }
            dispatch(deleteClientData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllClients());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Clients"
                    url="/bsl/admin/clients"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Client Lists</h4>
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New
                                    </button>
                                </div>
                                <div className="card-body">
                                    <DataTableComponent
                                        columns={columns}
                                        data={clients}
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
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
