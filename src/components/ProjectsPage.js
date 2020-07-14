import React, { Component } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import '../css/ProjectsPage.css';
import Bronco from '../Bronco.jpg';
import Alfie from '../Alfie.jpg';

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
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
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
