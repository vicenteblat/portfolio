import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../css/AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div id="About" className="about-wrapper">
        <section className="about-section">
          <Container>
            <h1 className="section-title d-flex justify-content-center">
              About me
            </h1>
            <div class="row d-flex justify-content-center">
              <div class="col-lg-12 col-centered">
                <Card className="card-box">
                  <Card.Body className="card-paragraph">
                    <Card.Text>
                      Lorem ipsum dolor sit amet, vim affert alterum ne. An his
                      adipisci dissentias. Vidit debitis in his. Cu cum graeco
                      prodesset, no has case senserit temporibus. Minim solet
                      vis eu. An mazim liber mei, ius copiosae petentium
                      contentiones ei.
                      <br></br>
                      <br></br>
                      Porro facete menandri qui ne, eos id diam malis, ex his
                      solet melius. Qui nemore imperdiet intellegat te, cu magna
                      essent alterum mel. Ad nam paulo deserunt, oratio luptatum
                      te vel, ea nam homero malorum vulputate. Pro no latine
                      euripidis complectitur, fugit ludus an mel, qui verterem
                      postulant quaerendum no. Modus mentitum appetere cum cu,
                      et partem aliquid antiopam vel. Impetus diceret
                      dissentiunt no nec, qui cu mutat inimicus reprehendunt.
                      <br></br>
                      <br></br>
                      At mucius ridens dolores vel, sed ex debitis appellantur.
                      In duo alterum torquatos intellegat, sed vivendum
                      torquatos ei. Eos eu incorrupte comprehensam. Tamquam
                      impedit percipit cu sea, malorum consectetuer pro ex, no
                      nihil democritum vel. An eos vero perpetua dissentiet.
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
