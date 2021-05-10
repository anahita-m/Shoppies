import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar(props) {
    
    const darkMode = props.darkMode;

    return (
        <nav className='navbar' >
            <Link to="/" className="nav-logo" style={{ color: darkMode ? 'white' : 'black' }}>
                <img alt="shoppies logo with popcorn shopify icon" src='https://imgur.com/xpZlPzy.png'></img>
                    The Shoppies
                </Link>
            <ul className='nav-links'>
                <li className="nav-item" >
                    <Link to="/" className="nav-link" onClick={() => props.onDarkModeOn(!props.darkMode)} style={{ color: darkMode ? 'white' : 'black' }}>
                        {darkMode ? (
                            <span className="light-mode-button" type="button">☼</span>
                        ) : (
                                <span className="dark-mode-button" type="button">☾</span>
                            )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}