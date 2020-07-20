import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../css/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div id="Home" className="wrapperContainer home-background">
        <section className="home-section d-flex align-items-center text-center">
          <Container className="home-text">
            <h1 className="welcome-message">Vicente Blat</h1>
            <div class="row d-flex justify-content-center">
              <div class="col-lg-7 col-centered">
                <Card className="intro-box">
                  <Card.Body className="intro-p">
                    <Card.Text>
                      Senior Biomedical Engineering student at the Georgia
                      Institute of Technology. Interested in: robotics,
                      prosthetics, medical devices and software development.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
export default HomePage;
