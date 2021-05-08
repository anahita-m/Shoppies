import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.darkModeOn = this.darkModeOn.bind(this);
      }

      darkModeOn = () => {
          if(this.props.darkMode){
            this.props.onDarkModeOn(false);
          }
          else{
            this.props.onDarkModeOn(true);
          }
      }

    render(){
        const darkMode = this.props.darkMode;
        
        return (
            <nav className='navbar' >
                <Link to="/" className="nav-logo" style={{color: darkMode? 'white': 'black'}}>
                    <img alt="shoppies logo with popcorn shopify icon" src='https://imgur.com/xpZlPzy.png'></img>
                    The Shoppies
                </Link>
                <ul className='nav-links'>
                    <li className="nav-item" >
                        <Link to="/" className="nav-link" onClick={this.darkModeOn} style={{color: darkMode? 'white': 'black'}}>
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
}