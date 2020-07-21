import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../css/AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div id="About" className="about-wrapper about-background">
        <section className="about-section">
          <Container>
            {/* <h1 className="about-title d-flex justify-content-center">
              About me
            </h1> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-12 col-centered">
                <Card className="about-card-box">
                  <Card.Body className="about-card-paragraph">
                    <Card.Text>
                      I was born and raised in Caracas, Venezuela. Moved to
                      Atlanta, Georgia in August of 2016 to pursue a Bachelor's
                      Degree in Biomedical Engineering from the Georgia
                      Institute of Technology. I'm expecting to graduate in
                      December of 2020 and actively looking for full time
                      opportunities in the fields of medical robotics, medical
                      devices and prosthetics.
                      <br></br>
                      <br></br>
                      Apart from academics I also like to get involved in my
                      community and participate in extracurricular activities
                      that allow me to improve my leadership skills. Some ways
                      in which I was involved in my school were as the Eboard's
                      Secretary of the Georgia Tech Society of Hispanic
                      Professional Engineers (2017-2018), a student organization
                      focused on the academic and professional development of
                      the Latino community on campus, as a Resident Advisor for
                      a community of 400 under-graduate students (2017-2020),
                      and as a Summer Challenge Program Counselor for minority
                      incoming Georgia Tech freshmen (2017).
                      <br></br>
                      <br></br>I am extremely passionate about my work, and
                      strive to create innovative projects that will have a
                      positive impact on society. I am capable of managing
                      multiple tasks and deliver results as needed. However, I
                      am not afraid to ask for help when needed. My
                      organizational skills have allowed me to prioritize
                      schedules and complete projects within time and budget
                      guide-lines.
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
export default AboutPage;
