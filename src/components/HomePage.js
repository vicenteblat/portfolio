import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../css/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="background-image"></div>
        <div className="content">
          <h1 className="welcome-message">Vicente Blat</h1>
          <div class="row">
            <div class="col-lg-7 col-centered">
              <Card className="intro-box">
                <Card.Body className="intro-p">
                  <Card.Text>
                    Senior Biomedical Engineeering student at the Georgia
                    Institute of Technology. Interested in: robotics,
                    prosthetics, medical devices and software development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
