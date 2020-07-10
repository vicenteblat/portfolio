import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../css/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="background-image"></div>
        <div className="content">
          <h1 className="welcome-message">Hi, I’m Vicente!</h1>
          <p className="intro">
            I'm a Senior Biomedical Engineeering Student at Georgia Tech
          </p>
        </div>
      </>
    );
  }
}
export default HomePage;
