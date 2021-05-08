import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      darkMode: true
    }
  }

  darkModeToggle(darkMode){
    this.setState({darkMode: darkMode});
}

  render(){
    const darkMode = this.state.darkMode;

    return (
      <div className="App" style={{backgroundColor: darkMode? 'rgb(21 22 27)':'rgb(228 233 255)'}}>
        <Container style={{minHeight:'100vh'}}>
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => (<Home {...props} darkMode={this.darkModeToggle.bind(this)} />)}/>
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}
