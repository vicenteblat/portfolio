import React, { Component } from 'react';
import '../css/App.css';

import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import CertificatesPage from './CertificatesPage';
import ProjectsPage from './ProjectsPage';
// import MemesPage from './MemesPage';
// import ContactPage from './ContactPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <HomePage />
        <AboutPage />
        <ResumePage />
        <CertificatesPage />
        <ProjectsPage />
      </div>
    );
  }
}

export default App;
