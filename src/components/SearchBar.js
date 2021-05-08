import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './SearchBar.css'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.props.handleSearchChange(e);
    }

    render(){
        const darkMode = this.props.darkMode;
        return(
            <Container>
                    <Row className="search-container">
                        <Col className="tagline" lg={6} style={{color: darkMode ? '#ebf4ff':'rgb(42 80 86)'}}> 
                            Nominate your favourite movies.
                        </Col>
                        <Col className="search-column">
                            <form className="search">
                                <input className="search-bar" type="text" placeholder="🔎 ex. Inception" onChange={this.handleChange}></input>
                            </form>
                        </Col>
                    </Row>
            </Container>
        )
    }

}