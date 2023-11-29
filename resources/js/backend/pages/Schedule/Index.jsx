import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import DataTableComponent from "../../../ui/DataTableComponent.jsx";
import BizModal from "../../../ui/BizzModal.jsx";
import Preloader from "../../components/Preloader/Index.jsx";
import {deleteSchedules, fetchAllSchedules, showScheduleMessage} from "../../../featurs/Schedule/ScheduleSlice";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading, schedules, errorMess, metaInfo
    } = useSelector((state) => state.scheduleReducer);

    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Get In Touch Messages", url: null
    }];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const columns = [{
        name: 'SL',
        selector: (row, index) => index + 1,
        sortable: false,
    }, {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
        sortableKey: "name",
        searchableKey: 'name',
    }, {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
        sortableKey: "email",
        searchableKey: 'email',
    }, {
        name: 'Phone',
        selector: row => row.phone,
        sortable: true,
        sortableKey: "phone",
        searchableKey: 'phone',
    }, {
        name: 'Company',
        selector: row => row.company_name,
        sortable: true,
        sortableKey: "company_name",
        searchableKey: 'company_name',
    }, {
        name: 'Actions', selector: (row) => (<RowDropDown>
            <Link to="#" onClick={(e) => handelScheduleShow(row?.id)} className="dropdown-item">Show</Link>
            <Link to="#" onClick={(e) => scheduleDeleteHandler(row?.id)}
                  className="dropdown-item">Delete</Link>
        </RowDropDown>),
        sortable: false
    }
    ];

    const handleModalClose = () => {
        setIsShow(!isShow);
    }

    const handelScheduleShow = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        dispatch(showScheduleMessage(id))
        setTitle(`Show ${metaInfo?.title || ''}`)
        setIsEdit(true)
        setIsShow(!isShow);
    }

    const scheduleDeleteHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteSchedules(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllSchedules());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Messages"
                    url="/bsl/admin/schedule"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="card-body">


                                    <VirtualDataTable
                                        name=""
                                        columns={columns}
                                        data={schedules}
                                        dataViewRangeArray={[10, 20, 30, 50, 100]}
                                        itemPerPage={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BizModal isShow={isShow} title={`Show ${metaInfo?.name}`} handleClose={handleModalClose} large={'xl'}>
                    <div className="card-body">
                        <table className="table table-responsive table-bordered" style={{width: "100%"}}>
                            <thead>
                            <tr>
                                <th width={`20%`}>Title</th>
                                <th width={`80%`}>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{metaInfo?.name || ''}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{metaInfo?.email || ''}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{metaInfo?.phone || ''}</td>
                            </tr>
                            <tr>
                                <td>Company Name</td>
                                <td>{metaInfo?.company_name || ''}</td>
                            </tr>
                            <tr>
                                <td>Requirements</td>
                                <td>{metaInfo?.description || ''}</td>
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
