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
      <div>
        <NavigationBar />
        <HomePage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
