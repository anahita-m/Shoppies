import React, { Component } from 'react';
import {Button, Container} from 'react-bootstrap';
import './Pagination.css'


export default class Home extends Component{
    constructor(props){
        super(props);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    prevPage = (e) => {
        this.props.setPage(e, this.props.pageNumber -1);
    }

    nextPage = (e) => {
        this.props.setPage(e, this.props.pageNumber + 1);
    }

    render(){
        const {pageNumber, totalPages, darkMode, searchTerm} = this.props;
        const result = (searchTerm.length > 0) ? 'Results:' : 'Most Popular:';

        return(
            <Container className="pagination-container" style={{color: darkMode ? 'white':'black'}} >
                <span className="result-text">
                    {result}
                </span>
                <div className="pagination-button-div">
                    <Button className="round previous" onClick={this.prevPage} variant="secondary" disabled={pageNumber === 1}> &#8249;</Button>
                    <p className="pagination-text">Page {pageNumber} of {totalPages} </p>
                    <Button className=" round next" onClick={this.nextPage} variant="secondary" disabled={pageNumber === totalPages}> &#8250;</Button>
                </div>
            </Container>
        )
    }

}