import React from 'react';
import ReactPaginate from "react-paginate";

function Pagination({handlePageClick, pageCount}) {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;
