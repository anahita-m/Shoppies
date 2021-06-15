import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SearchBar.css'

export default function SearchBar(props) {

    const darkMode = props.darkMode;

    /*
    Call props function whenever there is a change
    in input to the search bar.
    */
    return (
        <Container>
            <Row className="search-container">
                <Col className="tagline" lg={6} style={{ color: darkMode ? '#ebf4ff' : 'rgb(42 80 86)' }}>
                    Nominate your favourite movies.
                </Col>
                <Col className="search-column">
                    <form onSubmit={e => { props.handleSearchChange(e); }} className="search">
                        <input className="search-bar" type="text" placeholder="🔎 ex. Inception" onChange={e => { props.handleSearchChange(e); }}></input>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
