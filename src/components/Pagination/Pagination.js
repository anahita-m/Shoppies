import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Pagination.css'

export default function Pagination(props) {

    const pageNumber = props.pageNumber;
    const searchTerm = props.searchTerm;
    const totalPages = props.totalPages;
    const darkMode = props.darkMode;
    const result = (searchTerm.length > 0) ? 'Results:' : 'Most Popular:';

    /*
    Reset page whenever a user clicks on previous or next page.
    Disable previous button when we are on the first page of results
    and disable next button when we are on the last page of results.
    */
    return (
        <Container className="pagination-container" style={{ color: darkMode ? 'white' : 'black' }} >
            <span className="result-text">
                {result}
            </span>
            <div className="pagination-button-div">
                <Button className="round previous" onClick={e => { props.setPage(e, props.pageNumber - 1); }} variant="secondary" disabled={pageNumber === 1}> &#8249;</Button>
                <p className="pagination-text">Page {pageNumber} of {totalPages} </p>
                <Button className=" round next" onClick={e => { props.setPage(e, props.pageNumber + 1); }} variant="secondary" disabled={pageNumber === totalPages}> &#8250;</Button>
            </div>
        </Container>
    )
}