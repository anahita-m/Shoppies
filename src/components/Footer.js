import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Confetti from 'react-dom-confetti';
import './Footer.css'
import Social from './SocialShareButtons.js'


export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            closed: false
        }
        this.close = this.close.bind(this)
        this.resetClosed = this.resetClosed.bind(this)
        this.restart = this.restart.bind(this)
    }

    close = () => {
        this.setState({closed:true})
    }

    resetClosed = () => {
        this.setState({closed:false})
    }

    restart = () =>{
        this.props.restart();
    }

    render(){
        const darkMode = this.props.darkMode;
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

          const full = (this.props.nominatedMovies.length === 5 && !this.state.closed) ? true : false;
          if(this.state.closed && this.props.nominatedMovies.length === 4){
              this.resetClosed()
          }

        return(
            <div className="footer fade-in" style={{visibility: full && !this.state.closed ? 'visible' : 'hidden', backgroundColor: darkMode ? 'rgb(73 76 156)': 'rgb(36 68 74)'}}>
                <h5>You Have Nominated 5 Movies!</h5>
                <Social></Social>
                <p style={{width:'50%', margin:'0 auto', marginBottom:'3vh'}}>Click below to restart or remove a nomination to continue editing your current list.</p>
                <div className="confetti">
                    <Confetti active={full} config={config}/>
                    <Confetti active={full} config={config}/>
                </div>
                <Button className="restart-button" onClick={this.restart} >Restart</Button>
                <Button className="close-button" onClick={this.close} variant="secondary">Close</Button>
            </div>
        )
    }
}