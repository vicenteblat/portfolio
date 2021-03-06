import React, { Component } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../css/CertificatesPage.css';
import certificate01 from '../CSWA.jpg';
import certificate02 from '../Learning-React.jpg';
import certificate03 from '../React-Building-Interface.jpg';

class CertificatesPage extends Component {
  render() {
    return (
      <div
        id="Certificates"
        className="certificates-wrapper certificates-background"
      >
        <section className="certificates-section">
          <Container fluid className="carousel-container">
            <div class="row d-flex justify-content-center">
              <div class="col-centered">
                <Carousel className="certificates-carousel">
                  <Carousel.Item>
                    <img
                      className="img-fluid d-block w-100"
                      src={certificate01}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Certified SOLIDWORKS Associate (CSWA)</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-fluid d-block w-100"
                      src={certificate02}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>React Intro Course</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-fluid d-block w-100"
                      src={certificate03}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>React Building Interfaces Course</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
export default CertificatesPage;
