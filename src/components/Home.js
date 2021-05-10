import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Ring } from 'react-spinners-css';
import Footer from './Footer.js';
import MovieCard from './MovieCard.js';
import Navbar from './Navbar';
import NominationContainer from './NominationContainer.js';
import Pagination from './Pagination.js';
import SearchBar from './SearchBar.js';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './Home.css'

export default function Home(props) {
    // stored in local storage
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);
    const [initialList, setInitialList] = useLocalStorage('initialList', ['tt0301357', 'tt0800039', 'tt1798709', 'tt0218839', 'tt4686844', 'tt1375666', 'tt3416742', 'tt8946378'])
    const [moviesList, setMoviesList] = useState([]);
    const [nominatedMovies, setNominatedMovies] = useLocalStorage('nominatedMovies', []);
    const [nominatedMovieTitles, setNominatedMovieTitles] = useLocalStorage('nominatedMovieTitles', []);

    // stored in state
    const [errorMessage, setErrorMessage] = useState('');
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // set mode and pass to App.js to set correct background color
    function toggleDarkMode(darkMode) {
        setDarkMode(darkMode);
        props.darkMode(darkMode);
    }

    // set mode and pass to App.js to set correct background color
    function showLoadingAnimation(ms) {
        setTimeout(() => setLoadingSearch(false), ms)
    }

    // handle change from search bar and set search term and start loader animation
    function handleSearchChange(e) {
        e.preventDefault();
        if(e && e.target.value!== undefined && e.target.value !== null){
            setLoadingSearch(true);
            setSearchTerm(e.target.value);
        }
    }

    // update nomination list on new nomination
    function newNomination(movieID, movieTitle) {
        setNominatedMovies(nominatedMovies.concat(movieID))
        setNominatedMovieTitles(nominatedMovieTitles.concat(movieTitle))
    }

    // update nomination list on removal of nomination
    function removeNomination(movieID, movieTitle) {
        setNominatedMovies(nominatedMovies.filter(item => item !== movieID))
        setNominatedMovieTitles(nominatedMovieTitles.filter(item => item !== movieTitle))
    }

    // reset values on restart
    function restart() {
        setPageNumber(1);
        setLoadingSearch(false);
        setTotalResults(0);
        setSearchTerm('');
        setErrorMessage('');
        setNominatedMovies([]);
        setNominatedMovieTitles([]);
    }

    // wait for change in total results to update number of total pages
    useEffect(() => {
        const totalPagesUpdated = Math.ceil(totalResults / 10);
        setTotalPages(totalPagesUpdated);
    }, [totalResults])

    // on change in search term, we call a new search 
    useEffect(() => {
        search(true)
    }, [searchTerm])

    // on change in page number, we call a search with new page number
    useEffect(() => {
        search(false)
    }, [pageNumber])


    /*  Update search results.
        If search is triggered by page change then we use
        updated page number or else we assume it is a new
        search triggered by a new search term and update
        page values accordingly
    */
    function search(newSearch = true) {
        const pageNumberChecked = (newSearch) ? 1 : pageNumber;
        axios
            .get(
                `https://www.omdbapi.com/?apikey=ad8386ea&s=${searchTerm}&page=${pageNumberChecked}&type=movie`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    setMoviesList([]);
                    setPageNumber(1);
                    setTotalPages(1);
                    setErrorMessage(res.Error);
                    showLoadingAnimation(500);
                    return;
                }
                const moviesListUpdated = Array.from(new Set(res.Search.map(movie => movie.imdbID)));
                const totalResultsUpdated = parseInt(res.totalResults);
                setMoviesList(moviesListUpdated);
                setTotalResults(totalResultsUpdated);
                setErrorMessage('')
                setLoadingSearch(false)
            });
    }

    // set page from change in pagination
    function setPage(e, newPageNumber) {
        e.preventDefault();
        setPageNumber(newPageNumber);
    }

    return (
        <div className="home-container fade-in">
            <Container>
                <Navbar darkMode={darkMode} onDarkModeOn={toggleDarkMode}></Navbar>
                <SearchBar darkMode={darkMode} handleSearchChange={handleSearchChange} search={search} ></SearchBar>
                <NominationContainer darkMode={darkMode} nominatedMovies={nominatedMovies} removeNomination={removeNomination}></NominationContainer>
                <Pagination darkMode={darkMode} pageNumber={pageNumber} searchTerm={searchTerm} setPage={setPage} totalPages={totalPages}></Pagination>
                <Container className="movie-list-container">
                    {loadingSearch ?
                        (
                            <div style={{ margin: '0 auto', width: '25%' }}>
                                <Ring color="#79a3b6" />
                            </div>
                        ) :
                        [
                            <div>
                                {moviesList.length > 0 ?
                                    (
                                        <Row>
                                            {moviesList.map((movie) => (
                                                <Col xs={6} sm={4} md={3}>
                                                    <MovieCard darkMode={darkMode} key={movie} movieID={movie} newNomination={newNomination} nomContainer={false} nominatedMovies={nominatedMovies} removeNomination={removeNomination}></MovieCard>
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
                                                                <MovieCard darkMode={darkMode} key={movie} movieID={movie} newNomination={newNomination} nomContainer={false} nominatedMovies={nominatedMovies} removeNomination={removeNomination}></MovieCard>
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
                <Footer darkMode={darkMode} nominatedMovies={nominatedMovies} nominatedMovieTitles={nominatedMovieTitles} restart={restart} ></Footer>
            </Container>
        </div>

    )
}