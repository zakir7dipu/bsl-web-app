import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../../lib/BizAlert.js";
import {ucFirst, useInternalLink} from "../../../../lib/helper.js";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {deleteServiceData, fetchAllServices, showServiceData} from "../../../../featurs/Service/ServiceSlice";
import Preloader from "../../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import BizModal from "../../../../ui/BizzModal.jsx";
import VirtualDataTable from "../../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading,
        services,
        parentServices,
        errorMess,
        metaInfo
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
            name: 'SL',
            selector: (row, index) => index + 1,
            sortable: false,
        },
        {
            name: 'Parent Services',
            selector: row => row?.service?.title || '',
            sortable: true,
            sortableKey: "title",
            searchableKey: 'title',
        },
        {
            name: 'Title',
            selector: row => row?.title,
            sortable: true,
            sortableKey: "title",
            searchableKey: 'title',
        },
        {
            name: 'Type',
            selector: row => ucFirst(row?.type),
            sortable: true,
            sortableKey: "type",
            searchableKey: 'type',
        },
        {
            name: 'Image',
            selector: row => (
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.image_link)}/>
            ),
            sortable: false
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelServiceShow(row?.slug)} className="dropdown-item">Show</Link>
                    <Link to={`${row?.id}/edit`} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteServiceHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const handleModalClose = () => {
        setIsShow(!isShow);
    }

    const handelServiceShow = (slug) => {
        getMeta(slug)
    }

    const getMeta = (slug) => {
        dispatch(showServiceData(slug))
        setTitle(`Show ${metaInfo?.title || ''}`)
        setIsEdit(true)
        setIsShow(!isShow);
    }


    const deleteServiceHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteServiceData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllServices(0));
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
                                    <h4>Services Lists
                                    <Link className="btn btn-info btn-mini float-right" to={`create`}>
                                        <GrFormAdd/>&nbsp;Add New
                                    </Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <VirtualDataTable
                                        name="Services Data"
                                        columns={columns}
                                        data={services}
                                        dataViewRangeArray={[10, 20, 30, 50, 100]}
                                        itemPerPage={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BizModal isShow={isShow} title={`Show ${metaInfo?.title}`} handleClose={handleModalClose} large={'lg'}>
                    <div className="card-body">
                        <table className="table table-responsive table-bordered table">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Parent Name</td>
                                <td>{metaInfo?.service?.title || ''}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{metaInfo?.title || ''}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>{metaInfo?.type || ''}</td>
                            </tr>
                            <tr>
                                <td>Brief</td>
                                <td><p dangerouslySetInnerHTML={{__html: metaInfo?.brief}}></p></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><p dangerouslySetInnerHTML={{__html: metaInfo?.description}}></p></td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td><img style={{height: "100px", width: "100px"}}
                                         src={useInternalLink(metaInfo?.image_link)}/></td>
                            </tr>
                            <tr>
                                <td>Icons</td>
                                <td>
                                    {metaInfo?.icons && <img style={{height: "100px", width: "100px"}}
                                                             src={useInternalLink(metaInfo?.icons)}/>
                                    }
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </BizModal>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
