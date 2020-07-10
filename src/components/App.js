import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/App.css';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ProjectsPage from './ProjectsPage';
import MemesPage from './MemesPage';
import ContactPage from './ContactPage';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <div className="App">
          <Route path={['/', '/Home']} component={HomePage} exact />
          <Route path="/About" component={AboutPage} exact />
          <Route path="/Resume" component={ResumePage} exact />
          <Route path="/Projects" component={ProjectsPage} exact />
          <Route path="/Memes" component={MemesPage} exact />
          <Route path="/Contact" component={ContactPage} exact />
        </div>
      </Router>
    );
  }
}

export default App;
