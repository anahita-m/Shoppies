import React, { useState } from 'react'
import { Container, Button, Modal, Row, Col } from 'react-bootstrap'
import './MovieModal.css';

export default function MovieModal(props) {

    const [showHide, setShowHide] = useState(false);

    const {
        Title,
        Plot,
        imdbRating,
        Poster,
        Genre,
        Director,
        Actors,
        Ratings,
        Year
    } = props.movieData

    let rottenTomatoes;
    if (Ratings) {
        rottenTomatoes = (Ratings.length >= 2) ? true : false;
    }

    /*
    This is the implementation of the pop up movie modals that come up
    when a user clicks on the 'More Info' button. The movie poster,
    movie title, release year, short plot,genre(s), director, actor(s), 
    and ratings (imdb + rotten tomatoes) are displayed to provide the 
    user with additional informaiton.
    */
    return (
        <Container className="fade-in">
            <Button onClick={() => setShowHide(!showHide)} className="hoverinfo" id="more-button">More Info</Button>
            <Modal show={showHide}>
                <Modal.Header closeButton onClick={() => setShowHide(!showHide)}>
                    <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} sm={4}>
                            <img alt={'movie poster for ' + Title} className="movie-poster" src={Poster}></img>
                            <Row>
                                <Col style={{ marginTop: '1rem' }}>
                                    <p style={{ fontSize: '1rem' }}>
                                        <a target="_blank" href={`https://www.imdb.com/title/${props.movieData.imdbID}/`} rel="noopener noreferrer">
                                        <img alt="imdb logo" style={{ width: '2rem' }} id='imdbLogo' src='https://imgur.com/QRN0sEM.png'></img>
                                        </a>
                                        {'  ' + imdbRating}
                                        {rottenTomatoes ? (
                                            <div style={{ display: 'inline-block' }}>
                                                <img alt="rottentomatoes logo" src='https://imgur.com/j6YRjD2.png' style={{ width: '25px', marginLeft: '8px' }}></img>
                                                {'  ' + Ratings[1].Value}
                                            </div>
                                        ) : (
                                                <div style={{ display: 'inline-block' }}>
                                                    <img alt="rottentomatoes logo" src='https://imgur.com/j6YRjD2.png' style={{ width: '25px', marginLeft: '8px' }}></img>
                                                    {'  N/A'}
                                                </div>
                                            )}
                                    </p>
                                    <p><b>Year: </b>{Year}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <p><b>Plot: </b>{Plot}</p>
                            <div className="tags-container" style={{ marginBottom: '1rem' }}>
                                <span><b>Genre: </b></span>
                                {Genre &&
                                    Genre.split(', ').map(g => (
                                        <span className="genre-box" key={g}>{g + ' '}</span>
                                    ))}
                            </div>
                            <p><b>Director: </b>{Director}</p>
                            <p><b>Actors: </b>{Actors}</p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}