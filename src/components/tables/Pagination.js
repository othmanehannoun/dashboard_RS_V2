import React from 'react'
import ReactPaginate from 'react-paginate';
import { makeStyles  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    active:{
      color: 'red',
      fontWeight: 600,
      backgroundColor: 'red',
    }
  
  }))

export const Pagination = ({
    handlePageClick,
    pageCount,
    currentPage
}) => {

    const classes = useStyles();

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
            containerClassName = "pagination justify-content-end mb-2"
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
