import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {Link} from "react-router-dom";
import {deleteSubscriber, fetchAllSubscriber} from "../../../featurs/Subscribers/SubscribersSlice";
import Preloader from "../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading, subscribers, errorMess, metaInfo
    } = useSelector((state) => state.subscriberReducer);

    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Subscribers", url: null
    }];

    const columns = [{
        name: 'SL',
        selector: (row, index) => index + 1,
        sortable: false,
    }, {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
        sortableKey: "email",
        searchableKey: 'email',
    }, {
        name: 'Actions',
        selector: (row) => (<Link to="#" onClick={(e) => subscriberDeleteHandler(row?.id)}
                                  className="btn btn-danger btn-sm">Delete</Link>),
        sortable: false
    },];

    const subscriberDeleteHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteSubscriber(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllSubscriber());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Subscribers"
                    url="/bsl/admin/subscribers"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Subscribers</h4>
                                </div>
                                <div className="card-body">

                                    <VirtualDataTable
                                        name=""
                                        columns={columns}
                                        data={subscribers}
                                        dataViewRangeArray={[10, 20, 30, 50, 100]}
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
