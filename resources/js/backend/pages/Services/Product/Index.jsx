import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../../lib/BizAlert.js";
import {uid, useInternalLink, warningMessage} from "../../../../lib/helper.js";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {
    createProductData,
    deleteProductData,
    fetchAllProduct,
    updateProductData
} from "../../../../featurs/Product/ProductSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import DataTableComponent from "../../../../ui/DataTableComponent.jsx";
import BizModal from "../../../../ui/BizzModal.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Index(props) {

    const {
        isLoading,
        products,
        services,
        metaInfo,
    } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Products",
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
            name: 'Service',
            selector: row => row?.service?.title,
            sortable: true,
        },
        {
            name: 'Product',
            selector: row => row?.title,
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
                    <Link to="#" onClick={(e) => handelProductEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteProductHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Management");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState("");

    const [name, setName] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [brief, setBrief] = useState("");
    const [description, setDescription] = useState("");
    const [image_link, setImageFile] = useState("");

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const resetHandler = () => {
        setName("");
        setBrief("");
        setDescription("");
        setImageFile("");
        setServiceId("");
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("title", name);
        }

        if (!serviceId) {
            warningMessage("Service is required.")
        } else {
            formData.append("service_id", serviceId);
        }

        if (brief) {
            formData.append("brief", brief);
        }

        if (!description) {
            warningMessage("Description is required.")
        } else {
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

        if (name && serviceId && description) {
            if (!isEdit) {
                dispatch(createProductData(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedProduct
                }
                dispatch(updateProductData(data))
            }
        }
        handleModalClose()

    }

    const handelProductEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedProduct(id)
        let modal = products.filter((product) => product.id === id);
        modal = modal[0];
        setTitle(`Edit ${modal?.title}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(modal?.title || "");
        setServiceId(modal?.service_id || "");
        setBrief(modal?.brief || "");
        setDescription(modal?.description || "");
        setImageFile("");
    }

    const deleteProductHandler = async (id) => {
        setSelectedProduct(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                client: id
            }
            dispatch(deleteProductData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [dispatch]);

    //if (!isLoading) {
    return (
        <>
            <HeaderMeta
                title="Products"
                url="/bsl/admin/products"
            />
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Products Lists</h4>
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
                                    data={products}
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
                                <label>Select Services <sup
                                    className="text-danger"><MdStar/></sup></label>
                                <select className="form-control" name="parent_id" value={serviceId}
                                        onChange={event => setServiceId(event.target.value)}>
                                    <option value={null}>-- Select One--</option>
                                    {services && Array.from(services).map(model => {
                                        return (
                                            <option key={uid()} value={model?.id}>{model?.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Title <sup className="text-danger"><MdStar/></sup></label>
                                <input
                                    type={`text`}
                                    className={`form-control`}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder={`Product Name`}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <FileInput
                                    label={"Service Image"}
                                    file={image_link}
                                    id={`siteLogo`}
                                    handler={inputFileHandler}
                                    required={`required`}
                                />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Short Brief </label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={brief}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setBrief(data)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description <sup
                                    className="text-danger"><MdStar/></sup></label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={description}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescription(data)
                                    }}
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
    // } else {
    //     return <Preloader/>
    // }
}

export default Index;
