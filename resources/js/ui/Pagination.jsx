import React from 'react';
import ReactPaginate from "react-paginate";

function Pagination({handlePageClick, pageCount, range}) {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={range}
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;
