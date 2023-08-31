import React from 'react';
import {BsSearch} from "react-icons/bs";
import DataTable from "react-data-table-component";

function DataTableComponent({columns, data}) {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-8" style={{position: 'relative'}}>
                    <input type="text" placeholder="Search..." className={`form-control`} style={{paddingLeft: "20px", paddingRight:"50px", borderRadius: '5px'}}/>
                    <span style={{position:"absolute", top: '50%', right: '30px', transform: 'translate(0, -50%)', cursor: 'pointer'}}><BsSearch/></span>
                </div>
                <div className="col-lg-8 col-md-4 d-flex justify-content-end">
                    <strong>Total Row : {10}</strong>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationPerPage={10} // Change the number of rows per page
                paginationRowsPerPageOptions={[10, 20, 30]} // Customize rows per page
            />
        </div>
    );
}

export default DataTableComponent;
