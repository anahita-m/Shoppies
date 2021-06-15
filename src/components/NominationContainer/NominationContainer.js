import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard.js'
import './NominationContainer.css'

export default function NominationContainer(props) {

    const nominatedMovies = props.nominatedMovies;
    const darkMode = props.darkMode;
    const numNominated = nominatedMovies.length;
    const numArr = numberRange(numNominated + 1, 6)


    function numberRange(start, end) {
        return new Array(end - start).fill().map((d, i) => i + start);
    }

    return (
        <div style={{ backgroundColor: darkMode ? 'rgb(30 29 41)' : 'rgb(200 203 218)', marginLeft: '1rem', marginRight: '1rem' }}>
            <Row className="nom-container-row" style={{ zIndex: '0' }}>
                {nominatedMovies.map((movie, index) => (
                    <Col className="nom-container-col">
                        <MovieCard darkMode={darkMode} nominatedMovies={nominatedMovies} movieID={movie} key={movie} nomContainer={true} removeNomination={props.removeNomination} newNomination={props.newNomination} ></MovieCard>
                    </Col>
                ))}
                {numArr.map(num => (
                    <Col className="nom-container-col fade-in" key={num}>
                        {darkMode ?
                            (
                                <img className='nomination-placeholder-image' alt="placeholder for nominated movie" src="https://imgur.com/8b1pDFP.png"></img>
                            ) :
                            (
                                <img className='nomination-placeholder-image' alt="placeholder for nominated movie" src="https://imgur.com/nZiq4pO.png"></img>
                            )}
                        <p style={{ color: darkMode ? 'white' : 'black', marginBottom: '0rem' }} className="nomination-count">{num}</p>
                    </Col>
                ))}
            </Row>
        </div>
    )
}