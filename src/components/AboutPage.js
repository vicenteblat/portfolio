import React, { Component } from 'react';
import '../css/AboutPage.css';
import NavigationBar from './NavigationBar';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>About Page</h1>
      </div>
    );
  }
}
export default AboutPage;
