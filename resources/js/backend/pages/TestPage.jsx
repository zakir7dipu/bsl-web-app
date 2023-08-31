import React from 'react';
import DataTableComponent from "../../ui/DataTableComponent.jsx";

import DataTable from 'react-data-table-component';

function TestPage(props) {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
    ];

    const data = [
        { id: 1, name: 'John Doe'},
        { id: 2, name: 'Jane Smith'},
        { id: 3, name: 'John Doe'},
        { id: 4, name: 'Jane Smith'},
        { id: 5, name: 'John Doe'},
        { id: 6, name: 'Jane Smith'},
        { id: 7, name: 'John Doe'},
        { id: 8, name: 'Jane Smith'},
        { id: 9, name: 'John Doe'},
        { id: 10, name: 'Jane Smith'},
        { id: 11, name: 'John Doe'},
        { id: 12, name: 'Jane Smith'},
        { id: 13, name: 'John Doe'},
        { id: 14, name: 'Jane Smith'},
        { id: 15, name: 'John Doe'},
        { id: 16, name: 'Jane Smith'},
        { id: 17, name: 'John Doe'},
        { id: 18, name: 'Jane Smith'},
        { id: 19, name: 'John Doe'},
        { id: 20, name: 'Jane Smith'},
        { id: 21, name: 'John Doe'},
        { id: 22, name: 'Jane Smith'},
        { id: 23, name: 'John Doe'},
        { id: 24, name: 'Jane Smith'},
        { id: 25, name: 'John Doe'},
        { id: 26, name: 'Jane Smith'},
        { id: 27, name: 'John Doe'},
        { id: 28, name: 'Jane Smith'},
        { id: 29, name: 'John Doe'},
        { id: 30, name: 'Jane Smith'},
        { id: 31, name: 'John Doe'},
        { id: 32, name: 'Jane Smith'},
    ];
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestPage;
