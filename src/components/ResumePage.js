import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import '../css/ResumePage.css';

class ResumePage extends Component {
  render() {
    return (
      <div id="Resume" className="resume-wrapper resume-background">
        <section className="resume-section">
          <Container>
            {/* <h1 className="resume-title d-flex justify-content-center">
            Resume
          </h1> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-12 col-centered">
                <Card className="resume-card-box">
                  <Card.Body className="resume-card-body">
                    <Card.Text>
                      <h1 className="resume-section-title d-flex justify-content-center">
                        Education
                      </h1>
                      <h2 className="resume-school-title d-flex justify-content-center">
                        GEORGIA INSTITUTE OF TECHNOLOGY, College of Engineering
                      </h2>
                      <h2 className="resume-text d-flex justify-content-center">
                        Atlanta, Georgia
                      </h2>
                      <h2 className="resume-text d-flex justify-content-center">
                        Bachelor in Science in Biomedical Engineering
                      </h2>
                      <h2 className="resume-text d-flex justify-content-center">
                        Graduating with Honors (GPA: 3.26)
                      </h2>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card className="resume-card-box">
                  <Card.Body className="resume-card-body">
                    <Card.Text>
                      <h1 className="resume-section-title d-flex justify-content-center">
                        Relevant Courses
                      </h1>
                      <ul>
                        <li>
                          Computing for Engineers (MATLAB) &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                        </li>
                        <li>
                          Introduction to Object Oriented Programming (Java)
                        </li>
                        <li>Data Structures and Algorithms (Java)</li>
                        <li>Introduction to Biomedical Engineering Design</li>
                        <li>Circuits and Electronics</li>
                        <li>Biotransport</li>
                        <li>Medical Robotics (in progress)</li>
                        <li>Intro to Artificial Inteligence (in progress)</li>
                        <li>Machine Learning (in progress)</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card className="resume-card-box">
                  <Card.Body className="resume-card-body">
                    <Card.Text>
                      <h1 className="resume-section-title d-flex justify-content-center">
                        Professional Experience
                      </h1>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card className="resume-card-box">
                  <Card.Body className="resume-card-body">
                    <Card.Text>
                      <h1 className="resume-section-title d-flex justify-content-center">
                        Leadership Experience
                      </h1>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card className="resume-card-box">
                  <Card.Body className="resume-card-body">
                    <Card.Text>
                      <h1 className="resume-section-title d-flex justify-content-center">
                        Skills
                      </h1>
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
export default ResumePage;
