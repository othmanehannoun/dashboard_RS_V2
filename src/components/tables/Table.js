import React from 'react'
import ReactPaginate from 'react-paginate';

export const Table = ({
    handlePageClick,
    pageCount,
    currentPage

}) => {

    return (
        <ReactPaginate
            breakLabel = "..."
            nextLabel = " >> "
            onPageChange = {handlePageClick}
            pageRangeDisplayed = {5}
            pageCount = {pageCount}
            previousLabel = "<<"
            renderOnZeroPageCount = {null}
            marginPagesDisplayed = {2}
            containerClassName = "pagination justify-content-end"
            pageClassName = "page-item"
            pageLinkClassName = "page-link"
            previousClassName = "page-item"
            previousLinkClassName = "page-link"
            nextClassName = "page-item"
            nextLinkClassName = "page-link"
            activeClassName = "active"
            forcePage = {currentPage.current-1}
        />
        // {/* <input placeholder="Limit" onChange={e=>setLimit(e.target.value)}/>
        // <button onClick={changeLimit}>Set Limit</button> */}
    )
}
