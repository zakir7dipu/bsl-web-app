import React from 'react';
import {BsSearch} from "react-icons/bs";
import DataTable from "react-data-table-component";

function DataTableComponent({columns, data, isLoading, itemPerPage}) {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-8" style={{position: 'relative'}}>
                    <input type="text" placeholder="Search..." className={`form-control`} style={{paddingLeft: "20px", paddingRight:"50px", borderRadius: '5px'}}/>
                    <span style={{position:"absolute", top: '50%', right: '30px', transform: 'translate(0, -50%)', cursor: 'pointer'}}><BsSearch/></span>
                </div>
                <div className="col-lg-8 col-md-4 d-flex justify-content-end">
                    <strong>Total Row : {itemPerPage}</strong>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationPerPage={itemPerPage} // Change the number of rows per page
                paginationRowsPerPageOptions={[10, 20, 30, 50, 100]} // Customize rows per page
                pointerOnHover={true}
                highlightOnHover={true}
                theme="light"
                striped={true}
                progressPending={isLoading} // Use the progressPending prop
                progressComponent={<p>Loading...</p>} // Customize the loading indicator
            />
        </div>
    );
}

export default DataTableComponent;
