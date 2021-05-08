import React from 'react'
import { Container, Button,Modal,Row,Col } from 'react-bootstrap'
import './MovieModal.css';


class MovieModal extends React.Component{
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        const{
            Title,
            Plot,
            imdbRating,
            Poster,
            Genre,
            Director,
            Actors,
            Ratings,
            Year
        } = this.props.movieData

        let rottenTomatoes;
        if (Ratings){
            rottenTomatoes = (Ratings.length >= 2)  ? true : false;
        }

        return(
            <Container className="fade-in">
                <Button onClick={() => this.handleModalShowHide()} className="hoverinfo" id="more-button">More Info</Button>
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>{Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} sm={4}>
                                <img alt={'movie poster for ' + Title} className="movie-poster" src={Poster}></img>
                                <Row>
                                    <Col style={{marginTop:'1rem'}}>
                                        <p style={{fontSize:'1rem'}}>
                                            <img alt="imdb logo" style={{width:'2rem'}} id='imdbLogo' src='https://imgur.com/QRN0sEM.png'></img>
                                            {'  '+ imdbRating}
                                            {rottenTomatoes ? (
                                                <div style={{display:'inline-block'}}>
                                                    <img alt="rottentomatoes logo" src='https://imgur.com/j6YRjD2.png' style={{width:'25px', marginLeft:'8px'}}></img>
                                                    {'  '+ Ratings[1].Value }
                                                </div>
                                            ):(
                                                <div style={{display:'inline-block'}}>
                                                    <img alt="rottentomatoes logo" src='https://imgur.com/j6YRjD2.png' style={{width:'25px', marginLeft:'8px'}}></img>
                                                    {'  N/A' }
                                                </div>
                                            )}
                                        </p>
                                        <p><b>Year: </b>{Year}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <p><b>Plot: </b>{Plot}</p>
                                <div className="tags-container" style={{marginBottom:'1rem'}}>
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
    
}

export default MovieModal;