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
          <div class="row d-flex justify-content-center">
            <div class="col-centered">
              <Container fluid className="carousel-container">
                <Carousel className="certificates-carousel">
                  <Carousel.Item>
                    <img
                      className="img-fluid d-block w-100"
                      src={certificate01}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-fluid d-block w-100"
                      src={certificate02}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-fluid d-block w-100"
                      src={certificate03}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Container>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default CertificatesPage;
