import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../css/ResumePage.css';

class ResumePage extends Component {
  render() {
    return (
      <div id="Resume" className="resume-wrapper">
        <section className="resume-section">
          <Container>
            <h1 className="resume-title d-flex justify-content-center">
              Resume
            </h1>
            <h2 className="d-flex justify-content-center">Education</h2>
            <p className="resume-paragraph d-flex justify-content-center">
              Lorem ipsum dolor sit amet, vim affert alterum ne. An his adipisci
              dissentias. Vidit debitis in his. Cu cum graeco prodesset, no has
              case senserit temporibus. Minim solet vis eu. An mazim liber mei,
              ius copiosae petentium contentiones ei.
            </p>
            <h2 className="d-flex justify-content-center">Relevant Courses</h2>
            <p className="resume-paragraph d-flex justify-content-center">
              Lorem ipsum dolor sit amet, vim affert alterum ne. An his adipisci
              dissentias. Vidit debitis in his. Cu cum graeco prodesset, no has
              case senserit temporibus. Minim solet vis eu. An mazim liber mei,
              ius copiosae petentium contentiones ei.
            </p>
            <h2 className="d-flex justify-content-center">
              Professional Experience
            </h2>
            <p className="resume-paragraph d-flex justify-content-center">
              Lorem ipsum dolor sit amet, vim affert alterum ne. An his adipisci
              dissentias. Vidit debitis in his. Cu cum graeco prodesset, no has
              case senserit temporibus. Minim solet vis eu. An mazim liber mei,
              ius copiosae petentium contentiones ei.
            </p>
            <h2 className="d-flex justify-content-center">
              Leadership Experience
            </h2>
            <p className="resume-paragraph d-flex justify-content-center">
              Lorem ipsum dolor sit amet, vim affert alterum ne. An his adipisci
              dissentias. Vidit debitis in his. Cu cum graeco prodesset, no has
              case senserit temporibus. Minim solet vis eu. An mazim liber mei,
              ius copiosae petentium contentiones ei.
            </p>
            <h2 className="d-flex justify-content-center">Skills</h2>
            <p className="resume-paragraph d-flex justify-content-center">
              Lorem ipsum dolor sit amet, vim affert alterum ne. An his adipisci
              dissentias. Vidit debitis in his. Cu cum graeco prodesset, no has
              case senserit temporibus. Minim solet vis eu. An mazim liber mei,
              ius copiosae petentium contentiones ei.
            </p>
          </Container>
        </section>
      </div>
    );
  }
}
export default ResumePage;
