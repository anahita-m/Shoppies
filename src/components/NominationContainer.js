import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './NominationContainer.css'
import MovieCard from './MovieCard.js'



export default class NominationContainer extends Component{
    constructor(props){
        super(props);
        this.newNomination = this.newNomination.bind(this);
        this.removeNomination = this.removeNomination.bind(this);
    }

    removeNomination = (movieID, movieTitle) => {
        this.setState({nominatedResult:false}, this.props.removeNomination(movieID, movieTitle))
    }

    newNomination = (movieID) =>{
        this.props.newNomination(this.props.movieID);
    }

    render(){
        const {nominatedMovies, darkMode} = this.props;
        const numNominated = nominatedMovies.length;
        function numberRange (start, end) {
            return new Array(end - start).fill().map((d, i) => i + start);
          }
        const numArr = numberRange(numNominated+1,6 )
        return(
            <div style={{backgroundColor: darkMode ? 'rgb(30 29 41)':'rgb(200 203 218)', marginLeft:'1rem', marginRight:'1rem'}}>
                <Row className="nom-container-row" style={{zIndex:'0'}}>
                    {nominatedMovies.map((movie, index) => (
                        <Col className="nom-container-col">
                            <MovieCard darkMode={darkMode} nominatedMovies={nominatedMovies} movieID={movie} key={movie} nomContainer={true} removeNomination={this.removeNomination} newNomination={this.newNomination}></MovieCard>
                        </Col>
                    ))}
                    {numArr.map(num => (
                        <Col className="nom-container-col fade-in" key={num}>
                            {darkMode ? 
                            (
                                <img className='nomination-placeholder-image' alt="placeholder for nominated movie" src="https://imgur.com/8b1pDFP.png"></img>
                            ): 
                            (
                                <img className='nomination-placeholder-image' alt="placeholder for nominated movie" src="https://imgur.com/nZiq4pO.png"></img>
                            )}
                            <p style={{color: darkMode ? 'white' : 'black', marginBottom:'0rem'}} className="nomination-count">{num}</p>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}