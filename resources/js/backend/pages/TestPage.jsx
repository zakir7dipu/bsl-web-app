import React, {useEffect} from 'react';
import DataTableComponent from "../../ui/DataTableComponent.jsx";

import DataTable from 'react-data-table-component';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../featurs/TestFeatures/TestFeatures.js";
import RowDropDown from "../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";

function TestPage(props) {
    const {isLoading, data} = useSelector(state => state.testData)

    const dispatch = useDispatch()
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <RowDropDown>
                    <Link to="#" className="dropdown-item">Dropdown link</Link>
                    <Link to="#" className="dropdown-item">Dropdown link</Link>
                </RowDropDown>
            ),
        },
    ];

    const handlePageChange = (e) => {
        console.log(e)
    }

    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Data Table</h4>
                            <DataTableComponent
                                columns={columns}
                                data={data}
                                isLoading={isLoading}
                                itemPerPage={10}
                                handlePageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestPage;
