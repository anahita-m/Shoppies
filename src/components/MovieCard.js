import React, { Component } from 'react';
import axios from 'axios';
import MovieModal from './MovieModal.js'
import './MovieCard.css'
import {Button} from 'react-bootstrap';


export default class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            movieData:[],
        }
        this.nominate = this.nominate.bind(this);
        this.removeNomination = this.removeNomination.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                `https://www.omdbapi.com/?apikey=569ebc5a&i=${
                    this.props.movieID
                }&plot=short`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    nominate = () => {
        this.setState({nominatedResult:true}, this.props.newNomination(this.props.movieID, this.state.movieData.Title))
    }

    removeNomination = () => {
        this.setState({nominatedResult:false}, this.props.removeNomination(this.props.movieID, this.state.movieData.Title))
    }

    render(){
        const {
            Title,
            Released,
        } = this.state.movieData;

        var released = '(N/A)';
        if (Released){
            if(Released.split(" ")[2]){
                released = '('+Released.split(" ")[2] +')';
            }
        }

        const {darkMode, nomContainer} = this.props;
        const nominatedResult = this.props.nominatedMovies.includes(this.props.movieID) && !this.props.nomContainer;
        const full = (this.props.nominatedMovies.length === 5) ? true : false;

        var Poster = this.state.movieData.Poster;
        if (!Poster || Poster === 'N/A' || Poster === undefined) {
            Poster = 'https://imgur.com/NdiS4Fs.png';
        }

        return(
            <div className="movie-card-container fade-in" style={{color: darkMode ? 'white':'black'}}>
                <div className="image-container">
                    <div className={`${nomContainer ? "bg-image-nominated" : "bg-image"}`}>
                        <img className="movie-poster" alt={'movie poster for ' + Title} src={Poster}></img>
                        { nomContainer ?
                        (
                            <div>
                                <Button id="x" onClick={this.removeNomination}>X</Button>
                                <p style={{whiteSpace:'normal'}} className="movie-title">{Title + ' ' + released}</p>
                            </div>
                        ): 
                        (
                            <div>
                                <MovieModal movieData={this.state.movieData}></MovieModal>
                                {nominatedResult ? 
                                (
                                <Button className="hoverinfo" id="remove-button" onClick={this.removeNomination}>Remove</Button>

                                ):
                                (
                            <Button className="hoverinfo" id="nominate-button" onClick={this.nominate} style={{visibility: full ? 'hidden' : 'visible'}}>Nominate</Button>
                                )
                                }
                                <p className="movie-title">{Title + ' ' + released}</p>

                            </div>
                        )
                        }
                        {/* <p className="movie-title">{Title + ' ' + released}</p> */}
                    </div>
                </div>
            </div>
            )
    }

}