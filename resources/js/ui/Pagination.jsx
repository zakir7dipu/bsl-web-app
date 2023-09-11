import React, {useEffect} from 'react';
import ReactPaginate from "react-paginate";
import Style from "./Pagination.module.css"

function Pagination({handlePageClick, pageCount, range}) {
    const selectedPage = document.querySelector("li.selected")
    useEffect(() => {
        if (selectedPage) {
            selectedPage.classList.add(Style.selected)
        }
    }, [selectedPage])

    return (
        <ReactPaginate
            className={Style.paginationPart}
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
