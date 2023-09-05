import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../../lib/BizAlert.js";
import {ucFirst, useInternalLink} from "../../../../lib/helper.js";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {deleteServiceData, fetchAllServices} from "../../../../featurs/Service/ServiceSlice";
import Preloader from "../../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import DataTableComponent from "../../../../ui/DataTableComponent.jsx";

function Index(props) {
    const {
        isLoading,
        services,
        parentServices,
        errorMess
    } = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Services",
            url: null
        }
    ];

    const columns = [
        {
            name: 'ID',
            selector: row => row?.id,
            sortable: true,
        },
        {
            name: 'Parent Services',
            selector: row => row?.service?.title,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row?.title,
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => ucFirst(row?.type),
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
                    <Link to="#" onClick={(e) => handelServiceShow(row?.slug)} className="dropdown-item">Show</Link>
                    <Link to={`${row?.id}/edit`} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteServiceHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Services");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedService, setSelectedService] = useState("");
    const [name, setName] = useState("");
    const [parentName, setParentName] = useState("");
    const [brief, setBrief] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [meta_title, setMetaTitle] = useState("");
    const [meta_keywords, setMetaKeywords] = useState("");
    const [meta_description, setMetaDescription] = useState("");
    const [meta_image_link, setMetaImage] = useState("");

    const [image_link, setImageFile] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const resetHandler = () => {
        setName("");
        setParentName("");
        setBrief("");
        setDescription("");
        setType("");
        setMetaTitle("");
        setMetaKeywords("");
        setMetaDescription("");
        setMetaImage("");
        setImageFile("");
    }

    const handelServiceShow = (slug) => {
        getMeta(slug)
    }

    const getMeta = (slug) => {
        setSelectedService(slug)

        let modal = services.filter((service) => service.slug === slug)
        modal = modal[0]
        setTitle(`Show ${modal?.title}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(modal?.title || " ");
        setParentName(modal?.service?.title || "");
        setBrief(modal?.brief || "");
        setDescription(modal?.description || "");
        setType(modal?.type || "");
        setMetaTitle(modal?.meta_title || "");
        setMetaKeywords(modal?.meta_keywords || "");
        setMetaDescription(modal?.meta_description || "");
        setMetaImage(modal?.meta_image_link || "");
        setImageFile(modal?.image_link || "");
    }

    const deleteServiceHandler = async (id) => {
        setSelectedService(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteServiceData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllServices());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Services"
                    url="/bsl/admin/services"
                />
                <Breadcrumb list={breadcrumb}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Services Lists</h4>
                                    <Link className="btn btn-info btn-mini float-right" to={`create`} >
                                        <GrFormAdd/>&nbsp;Add New
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <DataTableComponent
                                        columns={columns}
                                        data={services}
                                        isLoading={isLoading}
                                        itemPerPage={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
