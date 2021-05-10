import React from 'react';
import { Button } from 'react-bootstrap';
import Confetti from 'react-dom-confetti';
import './Footer.css'
import Social from './SocialShareButtons.js'
import { useLocalStorage } from '../hooks/useLocalStorage';


export default function Footer(props) {

    const [closed, setClosed] = useLocalStorage('closed', false);
    const { darkMode, nominatedMovies, nominatedMovieTitles } = props;
    const full = (nominatedMovies.length === 5 && !closed) ? true : false;
    if (closed && nominatedMovies.length === 4) {
        setClosed(false)
    }
    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
        <div className="footer fade-in-footer" style={{ visibility: full && !closed ? 'visible' : 'hidden', backgroundColor: darkMode ? 'rgb(73 76 156)' : 'rgb(36 68 74)' }}>
            <h5>You Have Nominated 5 Movies!</h5>
            <Social nominatedMovieTitles={nominatedMovieTitles}></Social>
            <p style={{ width: '50%', margin: '0 auto', marginBottom: '3vh' }}>Click below to restart or remove a nomination to continue editing your current list.</p>
            <div className="confetti">
                <Confetti active={full} config={config} />
                <Confetti active={full} config={config} />
            </div>
            <Button className="restart-button" onClick={() => { props.restart() }} >Restart</Button>
            <Button className="close-button" onClick={() => setClosed(true)}>Close</Button>
        </div>
    )
}