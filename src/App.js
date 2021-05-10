import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

  function darkModeToggle(darkMode) {
    setDarkMode(darkMode);
  }

  return (
    <div className="App" style={{ backgroundColor: darkMode ? 'rgb(21 22 27)' : 'rgb(228 233 255)' }}>
      <Container style={{ minHeight: '100vh' }}>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (<Home {...props} darkMode={darkModeToggle} />)} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}
