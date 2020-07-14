import React, { Component } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import '../css/ProjectsPage.css';
import Bronco from '../Bronco.jpg';
import Alfie from '../Alfie.jpg';
import Alfa from '../Alfa.jpg';

class ProjectsPage extends Component {
  render() {
    return (
      <div id="Projects" className="projects-wrapper projects-background">
        <section className="projects-section">
          <Container>
            <h1 className="projects-title d-flex justify-content-center">
              Projects
            </h1>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={Bronco} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Project Bronco
                  </Card.Title>
                  <Card.Text>
                    <br></br>
                    Rewired RC car to a raspberry pi to control it with a mobile
                    application, using python to interface with the hardware.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="text-center">
                    Checkout this project's{' '}
                    <a href="https://github.com/vicenteblat">repo</a>
                  </Card.Text>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Alfie} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Project Alfie
                    <br></br>
                    (EGHI/GT Hack COVID-19)
                  </Card.Title>
                  <Card.Text>
                    Improving COVID-19 testing through automation and data
                    gathering, all in one machine.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="text-center">
                    Checkout this project's{' '}
                    <a href="https://github.com/vicenteblat/Hack_Covid_19">
                      repo
                    </a>
                  </Card.Text>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Alfa} />
                <Card.Body>
                  <Card.Title className="text-center">Project Alfa</Card.Title>
                  <Card.Text>
                    <br></br>
                    My first react web app: a mock consulting firm appointments
                    managent site.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="text-center">
                    Checkout this project's{' '}
                    <a href="https://github.com/vicenteblat/alfa">repo</a>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Container>
        </section>
      </div>
    );
  }
}
export default ProjectsPage;
