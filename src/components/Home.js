import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import {Ring} from 'react-spinners-css';
import Footer from './Footer.js';
import MovieCard from './MovieCard.js';
import Navbar from './Navbar';
import NominationContainer from './NominationContainer.js';
import Pagination from './Pagination.js';
import SearchBar from './SearchBar.js';
import './Home.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: true,
            errorMessage: '',
            initialList: ['tt0301357', 'tt0800039', 'tt1798709', 'tt0218839', 'tt4686844', 'tt1375666', 'tt3416742', 'tt8946378'],
            loadingSearch: false,
            moviesList: [],
            nominatedMovies: [],
            pageNumber: 1,
            searchTerm: '',
            totalPages: 1,
            totalResults: 0
        }
        this.showLoadingAnimation = this.showLoadingAnimation.bind(this);
    }


    darkMode(darkMode) {
        this.setState({ darkMode: darkMode }, this.props.darkMode(darkMode));
    }

    showLoadingAnimation(ms){
        setTimeout(() => this.setState({loadingSearch: false}), ms)
    }

    handleSearchChange(e) {
        this.setState({ searchTerm: e.target.value, loadingSearch: true }, () => { this.search(e, true) });
    }

    newNomination = (movieID) => {
        this.setState({
            nominatedMovies: this.state.nominatedMovies.concat(movieID),
            nominationsLeft: this.state.nominationsLeft - 1
        });
    }

    removeNomination = (movieID) => {
        this.setState({
            nominatedMovies: this.state.nominatedMovies.filter(item => item !== movieID),
            nominationsLeft: this.state.nominationsLeft + 1
        });
    }

    restart = () => {
        this.setState({ moviesList: [], pageNumber: 1, loadingSearch: false, totalPages: 1, totalResults: 0, searchTerm: '', errorMessage: '', nominatedMovies: [] })
    }

    search(e, newSearch = true) {
        e.preventDefault();
        const pageNumber = (newSearch) ? 1 : this.state.pageNumber;
        console.log('pageNum ' + pageNumber)
        console.log(`https://www.omdbapi.com/?apikey=569ebc5a&s=${this.state.searchTerm}&plot=full&page=${pageNumber}`)
        axios
            .get(
                `https://www.omdbapi.com/?apikey=569ebc5a&s=${this.state.searchTerm}&plot=full&page=${pageNumber}`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({
                        moviesList: [],
                        totalPages: 1,
                        pageNumber: 1,
                        errorMessage: res.Error,
                    }, () => {this.showLoadingAnimation(500)});
                    return;
                }
                const moviesList = res.Search.map(movie => movie.imdbID);
                const totalResults = parseInt(res.totalResults);
                const totalPages = Math.ceil(totalResults / 10);
                console.log('moviesList ' + moviesList)
                this.setState({
                    moviesList: moviesList,
                    totalResults: totalResults,
                    totalPages: totalPages,
                    pageNumer: 1,
                    errorMessage: '',
                    loadingSearch: false,
                });
            });
    }

    setPage = (e, pageNumber) => {
        this.setState({ pageNumber: pageNumber}, () => { this.search(e, false) });
    }

    render() {
        const {
            darkMode,
            searchTerm,
            loadingSearch,
            moviesList,
            initialList,
            pageNumber,
            totalPages,
            nominatedMovies,
            errorMessage
        } = this.state;

        return (
            <div className="home-container fade-in">
                <Container>
                    <Navbar darkMode={darkMode} onDarkModeOn={this.darkMode.bind(this)}></Navbar>
                    <SearchBar darkMode={darkMode} handleSearchChange={this.handleSearchChange.bind(this)} ></SearchBar>
                    <NominationContainer darkMode={darkMode} nominatedMovies={nominatedMovies} removeNomination={this.removeNomination}></NominationContainer>
                    <Pagination darkMode={darkMode} pageNumber={pageNumber} searchTerm={searchTerm} setPage={this.setPage.bind(this)} totalPages={totalPages}></Pagination>
                    <Container className="movie-list-container">
                        {loadingSearch ?
                        (
                            <div style={{margin:'0 auto', width:'25%'}}>
                                <Ring color="#79a3b6" />
                            </div>
                        ):
                        [
                            <div>
                            {moviesList.length > 0 ?
                                (
                                    <Row>
                                        {moviesList.map((movie) => (
                                            <Col xs={6} sm={4} md={3}>
                                                <MovieCard darkMode={darkMode} key={movie} movieID={movie} newNomination={this.newNomination} nomContainer={false} nominatedMovies={nominatedMovies} removeNomination={this.removeNomination}></MovieCard>
                                            </Col>
                                        ))
                                        }
                                    </Row>
                                ) : (
                                    <div>
                                        {searchTerm.length > 0 ?
                                            (
                                                <div style={{ color: darkMode ? 'white' : 'black' }}>{errorMessage}</div>
                                            ) :
                                            (
                                                <Row>
                                                    {initialList.map(movie => (
                                                        <Col xs={6} sm={4} md={3}>
                                                            <MovieCard darkMode={darkMode} key={movie} movieID={movie} newNomination={this.newNomination} nomContainer={false} nominatedMovies={nominatedMovies} removeNomination={this.removeNomination}></MovieCard>
                                                        </Col>
                                                    ))
                                                    }
                                                </Row>
                                            )}
                                    </div>
                                )}
                            </div>
                        ]}
                    </Container>
                    <Footer darkMode={darkMode} nominatedMovies={nominatedMovies} restart={this.restart}></Footer>
                </Container>
            </div>

        )
    }

}